import pandas as pd
import sklearn as sk
import numpy as np

from sklearn import metrics
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import KFold


def rf_model(request):

    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600'
    }

    content_type = request.headers['content-type']
    if content_type == 'application/json':
        request_json = request.get_json(silent=True)
    else:
        raise ValueError("JSON is invalid")

    def run_rf(X_train, X_test, y_train, y_test):

        accuracy_data = []
        nums = []

        for i in range(1, 128):
            rf_model = RandomForestClassifier(
                n_estimators=i, criterion="entropy", random_state=13)
            rf_model.fit(X_train, y_train)
            y_model = rf_model.predict(X_test)
            accuracy = accuracy_score(y_test, y_model)
            accuracy_data.append(accuracy)
            nums.append(i)

        max_acc = 0
        max_acc_estimators = 0
        for acc, estimators in zip(accuracy_data, nums):
            if(acc >= max_acc):
                max_acc = acc
                max_acc_estimators = estimators

        rf_model = RandomForestClassifier(
            n_estimators=max_acc_estimators, criterion="entropy", random_state=13)
        rf_model.fit(X_train, y_train)
        y_model = rf_model.predict(X_test)

        accuracy = accuracy_score(y_test, y_model)
        importance = rf_model.feature_importances_

        return accuracy, importance

    games = pd.DataFrame.from_dict(request_json, orient='index')
    columns = games.columns
    if 'mp' in columns.tolist():
        games.drop(columns=['mp'], inplace=True)
    if 'poss' in columns.tolist():
        games.drop(columns=['poss'], inplace=True)
    if 'plusMinus' in columns.tolist():
        games.drop(columns=['plusMinus'], inplace=True)
    games = games.replace(np.nan, 0)
    games = games.reindex(sorted(games.columns), axis=1)

    # return ({"msg": "orice"}, 200, headers)

    results = []
    for x in games.columns:
        if ((x != 'winner') and (x != 'poss') and (x != 'pts') and (x != 'fg') and (x != 'ft') and (x != 'p3')):
            # and (x != 'ast')
            results.append(x)

    X = games[results]
    y = games.winner

    # seasonal stats
    seasonAvg = games.mean(axis=0)

    # compute advanced stats
    seasonAvg['fgp'] = seasonAvg['fg'] / seasonAvg['fga']
    seasonAvg['ftp'] = seasonAvg['ft'] / seasonAvg['fta']
    seasonAvg['p3p'] = seasonAvg['p3'] / seasonAvg['p3a']
    seasonAvg['poss'] = 0.96 * (seasonAvg['fga'] +
                                seasonAvg['tov'] + (0.44 * seasonAvg['fta']) - seasonAvg['orb'])
    seasonAvg['ts'] = seasonAvg['pts'] / \
        (2 * (seasonAvg['fga'] + (0.44 * seasonAvg['fta'])))
    seasonAvg['efg'] = (seasonAvg['fg'] +
                        0.5 * seasonAvg['p3'])/seasonAvg['fga']
    seasonAvg['ortg'] = seasonAvg['pts'] * 100 / seasonAvg['poss']
    seasonAvg['ast/to'] = seasonAvg['ast'] / seasonAvg['tov']

    # print(seasonAvg)
    # kfold testing
    accr = []
    impr = []
    kf = KFold(5)
    for train_index, test_index in kf.split(X, y):
        X_train, X_test = X.iloc[train_index], X.iloc[test_index]
        y_train, y_test = y.iloc[train_index], y.iloc[test_index]
        acc, imp = run_rf(X_train, X_test, y_train, y_test)
        accr.append(acc)
        impr.append(imp)

    avg_impr = np.mean(impr, axis=0)
    avg_impr_df = pd.DataFrame(avg_impr, index=[
                               'ast', 'blk', 'drb', 'fga', 'fgp', 'fta', 'ftp', 'orb', 'p3a', 'p3p', 'pf', 'stl', 'tov', 'trb'])

    return ({
        "seasonalStats": seasonAvg.to_json(),
        "aoi": avg_impr_df.to_json(),
    }, 200, headers)

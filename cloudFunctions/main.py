# developed using the knowledge gained in the first term university 3rd year elective - Intro to AI

import pandas as pd
import sklearn as sk
import numpy as np

from sklearn import metrics
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.model_selection import KFold

# make sure all dependencies are installed via pip or conda
# use this in the command line to run functions locally
# functions_framework --target=rf_model


def rf_model(request):

    # https://cloud.google.com/functions/docs/writing/http#handling_cors_requests

    if request.method == 'OPTIONS':

        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

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

    print('started')

    def run_svc(X_train, X_test, y_train, y_test):
        model = SVC(kernel='linear', C=10, gamma='scale',
                    decision_function_shape='ovr', probability=True)
        model.fit(X_train, y_train)

        y_model = model.predict_proba(X_test)

        y_model = np.argmax(y_model, axis=1)

        acc = accuracy_score(y_test, y_model)

        print("SVC accuracy:")
        print(acc)
        print('\n')

        return acc

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

        print('random forrest accuracy:')
        print(accuracy)
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

    # kfold testing
    accr = []
    impr = []
    svc_accr = []
    kf = KFold(5)
    kf_number = 1
    for train_index, test_index in kf.split(X, y):
        X_train, X_test = X.iloc[train_index], X.iloc[test_index]
        y_train, y_test = y.iloc[train_index], y.iloc[test_index]

        print("K fold number:")
        print(kf_number)
        kf_number += 1

        acc, imp = run_rf(X_train, X_test, y_train, y_test)
        accr.append(acc)
        impr.append(imp)

        svc_acc = run_svc(X_train, X_test, y_train, y_test)
        svc_accr.append(svc_acc)

    avg_impr = np.mean(impr, axis=0)
    avg_impr_df = pd.DataFrame(avg_impr, index=[
                               'ast', 'blk', 'drb', 'fga', 'fgp', 'fta', 'ftp', 'orb', 'p3a', 'p3p', 'pf', 'stl', 'tov', 'trb'])

    return ({
        "seasonalStats": seasonAvg.to_json(),
        "aoi": avg_impr_df.to_json(),
    }, 200, headers)

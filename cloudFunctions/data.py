import sys
import os
import json

import pandas as pd

home_params = [
    'gmDate',
    # 'teamAbbr',
    # 'teamRslt',
    #  'teamWins',
    #  'teamLosses',
    #  'teamDayOff',
    'teamPTS',
    'teamAST',
    'teamTO',
    'teamSTL',
    'teamBLK',
    'teamPF',
    'teamFGA',
    'teamFGM',
    'teamFG%',
    # 'team2PA',
    # 'team2PM',
    # 'team2P%',
    'team3PA',
    'team3PM',
    'team3P%',
    'teamFTA',
    'teamFTM',
    'teamFT%',
    'teamORB',
    'teamDRB',
    'teamTRB',
    #  'teamTS%',
    #  'teamEFG%',
    'poss',
    #  'teamOrtg',
    #  'teamDrtg',
    'opptPTS',
    #  'matchWinner',
    'opptAbbr'
]

player_params = [
    'gmDate',
    # 'opptAbbr',
    # 'opptRslt',
    #  'opptWins',
    #  'opptLosses',
    #  'opptDayOff',
    'playMin',
    'playPTS',
    'playAST',
    'playTO',
    'playSTL',
    'playBLK',
    'playPF',
    'playFGA',
    'playFGM',
    'playFG%',
    # 'play2PA',
    # 'play2PM',
    # 'play2P%',
    'play3PA',
    'play3PM',
    'play3P%',
    'playFTA',
    'playFTM',
    'playFT%',
    'playORB',
    'playDRB',
    'playTRB',
    #  'opptTS%',
    #  'opptEFG%',
    # 'poss',
    #  'opptOrtg',
    #  'opptDrtg',
    # 'teamPTS',
    #  'matchWinner',
]

standard_params = [
    'gmDate',
    # 'Abbr',
    # 'Rslt',
    #  'Wins',
    #  'Losses',
    #  'DayOff',
    'PTS',
    'AST',
    'TO',
    'STL',
    'BLK',
    'PF',
    'FGA',
    'FGM',
    'FG%',
    # '2PA',
    # '2PM',
    # '2P%',
    '3PA',
    '3PM',
    '3P%',
    'FTA',
    'FTM',
    'FT%',
    'ORB',
    'DRB',
    'TRB',
    #  'TS%',
    #  'EFG%',
    'Poss',
    #  'Ortg',
    #  'Drtg',
    'oppPTS',
    #  'matchWinner',
    'oppAbbr'
]


def myFunc(teamName, all_games_12_18, home_params, away_params, standard_params, target):

    team_home = all_games_12_18[
        (all_games_12_18.teamAbbr == teamName)]

    team_away = all_games_12_18[
        (all_games_12_18.opptAbbr == teamName)]

    home = team_home[home_params]
    away = team_away[away_params]

    # normalization
    home.columns = standard_params
    away.columns = standard_params

    games = pd.concat([home, away])
    games = games.sample(frac=1).reset_index(drop=True)

    # print(games)

    result = []
    for x in games.columns:
        if x != target:
            result.append(x)

    X = games[result]
    y = games.matchWinner

    y_copy = y.copy()

    for i in range(len(y_copy)):
        if y_copy[i] == teamName:
            y_copy[i] = 1
        else:
            y_copy[i] = 0

    y_copy = y_copy.astype('float')

    return games, X, y_copy


path = './'

filename_read_new = os.path.join(path, "2017-18_teamBoxScore.csv")
all_games_new = pd.read_csv(filename_read_new)

# print(type(all_games_new))

lac_games = all_games_new[(all_games_new.teamAbbr == 'LAC')]
lac_games = lac_games[home_params]
lac_games.columns = standard_params
# print('2:')
# print(lac_games.shape)
# print('3:')
# print(lac_games.columns)

lac_games.reset_index(drop=True, inplace=True)
print(lac_games.columns)
# lac_games.to_json(r'games.json', orient='index')

filename_read_new2 = os.path.join(path, "2017-18_playerBoxScore.csv")
all_games_new2 = pd.read_csv(filename_read_new2)

players = all_games_new2[(all_games_new2.teamAbbr == 'LAC')]
players = players[player_params]

players.reset_index(drop=True, inplace=True)
print(players.columns)
# players.to_json(r'players.json', orient='index')

# print('4:')
# print(players.shape)
# print('5:')
# print(players.columns)

# for i, x in enumerate(lac_games['gmDate']):
# print(x)


# seasonAvg = all_values.iloc[:, 2:33].mean(axis=0)
# print(seasonAvg)
# print(seasonAvg.shape)


# ADVANCED STATISTICS FUNCTIONS

def ts(fga, fta, pts):
    tsa = fga + 0.44 * fta
    return pts / (2 * tsa)


def efg(fg, p3, fga):
    return (fg + 0.5 * p3)/fga


def ortg(poss, pts):
    return pts/poss


def dtrg(poss, oppPTS):
    return oppPTS/poss

import sys
import os
import json

import keras
import pandas as pd
import sklearn as sk
import tensorflow as tf
import numpy as np
from tensorflow import keras

from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import cross_validate
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


def run_rf(X_train, X_test, y_train, y_test):

    # Xtrain, Xtest, ytrain, ytest = train_test_split(
    #     values, targets, test_size=10)
    # , random_state=7

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

    # for acc, estimators in zip(accuracy_data, nums):
    #     print(acc)
    #     print(estimators)

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

    # print('accuracy: ')
    # print(accuracy)
    # print(max_acc_estimators)

    importance = rf_model.feature_importances_
    # print(importance)

    return accuracy, importance

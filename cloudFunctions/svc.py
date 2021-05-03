from sklearn import metrics
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
import sys
import os
import json

import keras
import pandas as pd
import sklearn as sk
import tensorflow as tf
import numpy as np

from tensorflow import keras
# print(f"Keras Version: {keras.__version__}")

# print(f"Tensor Flow Version: {tf.__version__}")
# print(f"Keras Version: {keras.__version__}")
# print(f"Python {sys.version}")
# print(f"Pandas {pd.__version__}")
# print(f"Scikit-Learn {sk.__version__}")
# print(f"numpy: {np.__version__}")

# SVC MODEL


def run_svc(X_train, X_test, y_train, y_test):

    model = SVC(kernel='linear', C=10, gamma='scale',
                decision_function_shape='ovr', probability=True)
    model.fit(X_train, y_train)

    y_model = model.predict_proba(X_test)

    y_model = np.argmax(y_model, axis=1)

    acc = accuracy_score(y_test, y_model)
    print('\n')
    print("accuracy is: ", acc)
   #  importance = model.coef_
   #  print(importance)
   #  print('\n')
   #  score = np.sqrt(metrics.mean_squared_error(y_model, y_test))
   #  print(f"Final score (RMSE): {score}")
   #  print('\n')
   #  print('SVC - done')
   #  print('\n')

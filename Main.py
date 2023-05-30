import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

#Get data from csv as numpy array then convert to pandas dataframe object
playerInfo = np.genfromtxt("Dataset/player_info.csv", delimiter=",", dtype=str)
teamSummary = np.genfromtxt("Dataset/team_summary.csv", delimiter=",", dtype=str)
playerMatchup = np.genfromtxt("Dataset/player_matchup.csv", delimiter=",", dtype=str)

playerInfoDF = pd.DataFrame(playerInfo[1:], columns=playerInfo[0])
teamSummaryDF = pd.DataFrame(teamSummary[1:], columns=teamSummary[0])
playerMatchupDF = pd.DataFrame(playerMatchup[1:], columns=playerMatchup[0])

#Merge dataframes based on ID columns to form complete numpy array
completeInfo = pd.merge(playerInfoDF, playerMatchupDF, left_on='player_id', right_on='player_id')
completeInfo = completeInfo.merge(teamSummaryDF, left_on='opponent_id', right_on='team_id')

#Construct input and relative output arrays for linear regression model
inputX = completeInfo.copy()
outputY = completeInfo.copy()

inputX = inputX[['player_id', 'team_win_percentage', 'location']].to_numpy()
outputY = outputY.drop(columns=['player_id', 'player_name', 'player_team', 'opponent_id', 'location', 'team_id', 'team_name', 'team_win_percentage'])
columnY = outputY.columns
outputY = outputY.to_numpy()

#Construct model and do prediction for player Jimmy Butler - Denver Away Game
model = LinearRegression().fit(inputX, outputY)
predictionY = model.predict([[1, 0.646, 65]]) #65 = ASCII (A = Away game)

predictionDF = pd.DataFrame(predictionY, columns=columnY)
print(predictionDF)

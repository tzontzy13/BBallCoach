Download code

Download all code from CITY UNIVERSITY ONEDRIVE:

https://cityuni-my.sharepoint.com/:f:/g/personal/razvan_gututui_city_ac_uk/EgvFAqPKYJdCkeyu-yXI5ngBR5fvzi66QOBRX-0uG9U0RQ


The GitHub repo has been shared with:
S.M.Wilson@city.ac.uk
Ug.cs@city.ac.uk

And can be found at:
https://github.com/tzontzy13/BBallCoach/

PLEASE EMAIL Razvan.gututui@city.ac.uk Razvan.gututui@icloud.com Razvan.gututui@gmail.com Razvan.gututui10@gmail.com IF YOU ENCOUNTER PROBLEMS
Alternatively
– call +40 749 550 550 ROMANIA PHONE NUMBER

Install dependencies
Open a terminal and change directory into the project root folder

If you run the ”ls -al” command, you should see folders such as functions, cloudFunctions, src, public

Run “npm install” to install dependencies
Run “npm run build” to build the application

cd into the “functions” folder
run “npm install”
cd back to root folder

Create GCP project
Using the GCP online web console, create a new GCP project
In the GCP project, Enable billing
In the GCP project, create a GCP Cloud Function
-set a name and region
-trigger type - http
-SAVE THE HTTP TRIGGER LINK SO YOU UPDATE THE FIREBASE CLOUD FUNCTION (next step)
-make sure to TICK the ALLOW UNAUTHENTICATED INVOCATIONS
-under runtime, build and connections settings, set TIMEOUT to 479, then click save
-click next
-click enable Build API
-set a runtime of Python 3.7
-set the entry point to “rf_model”
FROM THE PROJECT ROOT FOLDER
Cd into the “cloudFunctions” folder
-copy the main.py file in the GCP console main.py file
-copy the reuirements.txt file in the GCP console requirements.txt file
-click deploy

Create Firebase Project ONLY AFTER GCP
Using the Firebase online web console, create a new project AND LINK IT TO THE GCP PROJECT! VERY IMPORTANT you choose the GCP project when asked to input a name for the Firebase Project

In the Firebase online console, add a web application
In the code editor, change directory to “src”, then change directory to “firebase”, and paste the config in the config object variable in “config.js”
In the Firebase online console, enable authentication with email and password
In the Firebase online console, enable authentication with Google
In the Firebase online console, create a Firestore database
In the Firebase online console, set the Firestore security rules to

//   match /databases/{database}/documents {
//     match /users/{userId} {
//       allow get, write: if request.auth != null && request.auth.uid == userId
//     }
//   }
// }

From the root project folder in the code editor, cd into the “functions” folder, in the “index.js” file paste the TRIGGER FOR THE GCP CLOUD FUNCTION from previous step ON LINE 37 – base URL

In the Firebase online console, click on and enable hosting, by following the steps laid out by Google (install SDK “npm install -g firebase-tools “)

Using the terminal in the project root folder, run “firebase login”, then “firebase init”
Select your project
!ONLY SELECT HOSTING
Follow the steps mentioned by Google
? What do you want to use as your public directory? Build
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
? Set up automatic builds and deploys with GitHub? (y/N) n
Run “npm run build”
Run “firebase deploy –only functions”
Run “firebase deploy –only hosting”

App is live.

Please make sure you follow the steps exactly. If you cannot run the application on your local machine, please contact me. This process is tedious, and any miss click can lead to broken code.

The ML module takes approximately 8 minutes to run, results can be seen on GCP, after clicking the GCP Cloud Function that you created earlier, under LOGS. 8-9 minutes after you have saved your 50th, the analysis page should be populated

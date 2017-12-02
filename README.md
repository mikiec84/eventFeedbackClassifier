# eventFeedbackClassifier

This respository is a sample use case of how can one use the IBM watson's Natural Language Classifier to classify the feedback recieved after an event into Suggestion or Complaint using PubNub Functions.

## Setup

Setup IBM Watson Natural Language Classifier and PubNub Functions as follows

### IBM Watson's Natural Language Classifiers API
Step 1 : Login to the IBM Watson's Developer Account with the valid credentials, and go to Catalog.
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep1.png)
        
Step 2 : Select the Natural Language Classifer service under the Watson services.
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep2.png)

Step 3 : Give the service name.
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep3.png)

Step 4 : The IBM Watson Natural Language Classifer is free only for a month in the standard plan and offers on 1500 api calls.<br> SP choose carefully and
        to Create the service.      
        <br>![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep3A.png)

Step 5 : Goto the Created service page. Click on the Service Credentials Or Click on the Show icon.
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep3B.png)
        

Step 6 : Make a note of the Username and password by clicking the view credentials link(Also make a note of the URL) 
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep7.png)

Step 7 : Goto the Manage options on the left, and down below click on the "Get Started Tutorial" button<br>
        It will redirect you to the documentation page.      
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep4.png)

Step 8 : If you follow the process you can see how to form the url with the<br>
        username and password and pass the your custom data for Classification.        
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep4A.png)

You can also go the IBM Watson Natural Language Classifier's API Reference Page[here](https://www.ibm.com/watson/developercloud/natural-language-classifier/api/v1/?curl#explorer) to try different methods for getting your classifier app running.

![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep9.png)

### PubNub Functions (Previously Called BLOCKS)

Refer to this [README file](functions/README.md). Pay attention to Step 10 in block creation. This is where you will use the username and password from step 6 above.

### Training Data

The training data to feed the Watson Natural Lanuage Classifer has to be in a particular format which you will find [here](https://console.bluemix.net/docs/services/natural-language-classifier/using-your-data.html#using-your-own-data). And to get the training data for this sample download [this file](trainingData/nlcWatson.csv).

## Execution

Assuming that both the Watson Natural Language Classifer and PubNub Fucntion are set up correctly and are running, make the following changes in the code.

Step 1 - Clone this repository 

Step 2 - Open [index.js](frontEnd/index.js) and edit line 9 & 10 to replace the PubNub publish and subscribe keys with the ones that you used for provisioning the Function.

Step 3 - Open [index.html](frontEnd/index.html) in multiple web browsers and enter your feedback for any event 

Step 4 - Submit the feedback and check the classified result from the Natural Lanuage Classifier via your PubNub Functions. 



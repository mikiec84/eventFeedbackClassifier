# Event Feedback Classifier

This respository contains a demo use case to train IBM Watson's Natural Language Classifier to identify the type of feedback received for an event. If you are an event organizer and have a feedback form for your attendees, then by using Watson Natural Language Classifier service, you can classify each of the feedback comments as either "Suggestion" or "Complain". 

Follow along this guide to build a customer feedback analytics system using Watson Natural Language Classifier and PubNub Functions.

## Setup

To run this demo you will need to subscribe for IBM and PubNub account.

There are four steps involved in executing this demo

1. Setup IBM Watson Natural Language Classifier (NLC) service

2. Train NLC to differentiate the feedback comments

3. Setup PubNub Functions to handle client requests

4. Test the demo with client web application

## Setup IBM Watson Natural Language Classifier Service

The Watson Natural Language Classifier service is the brain behind this application. You can train it to identify different kinds of feedback comments and then it can build up its cognizance to differentiate live feedback data. But first you need to launch and configure the service.  

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


## Train NLC to differentiate the feedback comments

For this application scenarion ( feedback about an event) we have created a small training set. The training data to feed the Watson Natural Lanuage Classifer has to be in a particular format which you will find [here](https://console.bluemix.net/docs/services/natural-language-classifier/using-your-data.html#using-your-own-data). 

You can access the training set for this demo here in [this file](trainingData/train.csv).

Follow the steps below to train the NLC service with the above training set.


## Setup PubNub Functions to handle client requests

The PubNub Functions is a microService framework that can be deployed in minutes. It is part of the [PubNub Data Stream Network](http://www.pubnub.com). It orchestrates between the user requests and calls to the NLC service to return the feedback classification for every request.

Refer to this [README file](functions/README.md) to configure your PubNub Functions instance. 

Note : Pay attention to Step 10 in block creation. This is where you will use the username and password that was generated in step 6 under section "Setup IBM Watson Natural Language Classifier Service" above.


## Test the demo with client web application

Assuming that both the Watson Natural Language Classifer and PubNub Fucntion are set up correctly and are running, make the following changes in the code.

Step 1 - Clone this repository 

Step 2 - Open [index.js](frontEnd/index.js) and edit line 9 & 10 to replace the PubNub publish and subscribe keys with the ones that you used for provisioning the Function.

Step 3 - Open [index.html](frontEnd/index.html) in multiple web browsers and enter your feedback for any event 

Step 4 - Submit the feedback and check the classified result from the Natural Lanuage Classifier via your PubNub Functions. 



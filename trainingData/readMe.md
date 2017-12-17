# Training the Classifier
 
 Please note that this is the direct conitnuation after STEP 6 from the main Read Me file [this](/README.md)
  
Step 1 : Assuming that you have looged into your IBM Bluemix Developer Console Goto the Manage options on the left, 
         and down below click on the "Get Started Tutorial" button. It will redirect you to the documentation page.      
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep4.png)

Step 2 : If you follow the process you can see how to form the url with the<br>
        username and password and pass the your custom data for Classification.        
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/watson_classifier/watsonAPIstep4A.png)
        
## Train NLC to differentiate the feedback comments

For this application scenarion ( feedback about an event) we have created a small training set. The training data to feed the Watson Natural Lanuage Classifer has to be in a particular format which you will find [here](https://console.bluemix.net/docs/services/natural-language-classifier/using-your-data.html#using-your-own-data). 

You can access the training set for this demo here in [this file](trainingData/nlcWatson.csv).

Follow the steps below to train the NLC service with the above training set.

### We will be using the CURL Commands to get our classifer up and running.
        
Step 3: We will invoke the IBM Watson Natural Classifer API in our Terminal / Command Prompt.   ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep9.png)

Step 4: In our next step we will authenticate and push our training set into our Classifier  ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep10.png)

Step 5: If your credentials i.e: Username and Password are correctly pasted then you will see the below response  ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep11.png)

Step 6: If you look carefully in the above image the status of our classifer is "Training" . So we need to run command as shown in the image below to check whether our classifier is ready  ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep12.png)

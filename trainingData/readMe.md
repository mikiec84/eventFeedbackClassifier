# Training the Classifier
 
 The training set for this application can be accessed in [this file](trainingData/train.csv).
 <br>
  <br>
The training data for Watson Natural Lanuage Classifer has to be in a particular format which you will find [here](https://console.bluemix.net/docs/services/natural-language-classifier/using-your-data.html#using-your-own-data). 


 
## Follow the steps below to train the NLC service with the above training set
  
Step 1 : Assuming that you have logged into your IBM Bluemix Developer Console, Goto the Manage options on the left, 
         and down below, click on the "Get Started Tutorial" button. It will redirect you to the documentation page.      
        ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep4.png)

Step 2 : If you follow the process you can see how to form the url with the username and password and pass your custom data for Classification. 
   ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep4A.png)
        

### Note : For the following steps, you will need the CURL command on command prompt. 

        
Step 3: Invoke the IBM Watson Natural Classifer API in your Terminal / Command Prompt.   

![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep9.png)

Step 4: Next, invoke the command to pass the training set to the Classifier. Make sure to insert your username and password correctly and also insert the path where your traing data csv is stored. 

![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep10.png)

Step 5: If your credentials i.e: Username and Password are correctly pasted then you will see the below response on your terminal. Please make a note of this URL as we will be using this in our PuBNuB Functions ahead.  ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep11.png)

Step 6: If you look carefully in the above screenshot, the status of the classifer is "Training". This means that our Clssifier service is processing the training data. You can subsequently invoke the command as shown in the screenshot below to check whether the classifier is ready  

![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/trainingClassifier/watsonAPIstep12.png)

If the Classifier is ready, you will get a response like above. 

<br>

Your Classifer is now trained and ready to use. Have fun !

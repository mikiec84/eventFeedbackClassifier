#ATC-Chat Event Handler for PubNub BLOCKS

# Pubnub block creation
Step 1 : Login to the Pubnub account with the valid credentials.<br>
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep1.png)
Step 2 : Click the "CREATE NEW APP" by giving a name to your APP.<br>
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep2.png)
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep2A.png)
         You can see the newly created APP in the page.<br>
Step 3 : Click on the newly created APP.<br>
         You can see the Demo keyset for the new application created.
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep3.png)         
Step 4 : Click on the Demo keyset and click on the Functions (on the left side).
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep4.png)
Step 5 : Create a new Function by giving the name and description to the Fucntion.
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep5.png)
Step 6 : Create the Module(previously called as Event Handler) by clicking CREATE button at the bottom.
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep6.png)
Step 7 : Give the Name of the Module, Channel to communicate with the Fucntion and the option of when function <br>
         code should execute(Before of After publish of the message).
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep6A.png)
Step 8 : Click on the newly created Module.
         ![alt-tag](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/screenshots/pubnubFucntionStep7.png)
Step 9 : Copy the funtion code in the text area from [here](https://github.com/shyampurk/eventFeedbackClassifier/blob/master/functions/main.js). 
         ![alt-tag](https://github.com/shyampurk/atc-chat/blob/master/screenshots/pubnub_blocks/pb_atc_step9.png)

Step 10 : Update line 16 & 17 to set variable 'username' and 'password' to the username and password obtained after creating the Weather Company Data Service.  Save the block.

Step 11 : Click on the Start block button(top right) to start the block.
         ![alt-tag](https://github.com/shyampurk/atc-chat/blob/master/screenshots/pubnub_blocks/pb_atc_step10.png)

Your block code is now running

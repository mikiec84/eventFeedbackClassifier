$(document).ready(function () {
	
	// Setting up varaibles

	var inputMessage = $('#inputMessage'),
	inputMessageSubmit = $("#inputMessageSubmit"),
	channel_input = 'ibm_classifier_input',      // channel for pub_publish which will send the message
	channel_output = 'ibm_classifier_output',    // channel for pub_subscribe which will recieve the message
	response = $('#responseClass'),
	pub_key = 'pub-c-150a0a4f-5f17-4b45-a3ff-8f14b0672c58',
	sub_key = 'sub-c-9c7f5d32-cd6b-11e7-8f18-c64264e19a04';

	var sCount = 0;
	var cCount = 0;
	
	var uFeedback = null; // we will store the feedback from the user in this variable

	var pubnub = PUBNUB({
		publish_key : pub_key,
		subscribe_key : sub_key
	})

   // Pubnub funtion to call the classification result

   function pub_subscribe(){
   	pubnub.subscribe({
   		channel : channel_output,
   		message : function(m){
   			console.log(m);
   			message_listing(m);

   		},
   		error : function (error) {
   			console.log(JSON.stringify(error));
   		}
   	});
   };

   pub_subscribe();

	// Pubnub function to post our message to the pubnub block(function)

	function pub_publish(pub_msg){
		pubnub.publish({
			channel : channel_input,
			message : pub_msg,
			callback : function(m){
				console.log(m);
			}
		});
	};

	
   // This fucntion is to send message to the pubnub block using the pub_pblish function

   function send_message(){
   		var feedback = {

   			"userMessage":inputMessage.val()
   		}
		
		// Here we store the feedback entered by the user
		uFeedback = feedback;
		
   		if(inputMessage.val().length != 0){
   			pub_publish(feedback);

   			inputMessage.val("");
   		}
  
   };

	// This is after we call the call pub_suncribe function we differentiate between a Suggestion and a Complaint
	function message_listing(m){

		if(m.feedbackClass == "suggestion"){

			document.getElementById('responseClass').innerHTML = m.feedbackClass;
			sCount ++;
			document.getElementById('SuggestionCount').innerHTML = sCount;

			

		}
		else if (m.feedbackClass == "complaint"){

			document.getElementById('responseClass').innerHTML = m.feedbackClass;
			cCount ++;
			document.getElementById('ComplaintCount').innerHTML = cCount;

		}
		else{

			console.log("Invalid message");
			console.log("Received message from block : ",m);
			

		}
		
	}

    // This exceutes when submit buttion is clicked

    inputMessageSubmit.on( "click", function() {

    	send_message();
	document.getElementById('uMessage').innerHTML = uFeedback.userMessage;// we fetch and display the feedback from the user


    });

});

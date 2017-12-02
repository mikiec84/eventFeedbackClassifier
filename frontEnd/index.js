$(document).ready(function () {
	
	// Setting up varaibles

	    var inputMessage = $('#inputMessage'),
	    	inputMessageSubmit = $("#inputMessageSubmit"),
	    	channel = 'ibm_classifier1_input',
	    	response = $('#responseClass'),
	    	pub_key = 'pub-c-150a0a4f-5f17-4b45-a3ff-8f14b0672c58',
	    	sub_key = 'sub-c-9c7f5d32-cd6b-11e7-8f18-c64264e19a04';

	    var sCount = 0;
	    var cCount = 0;
		

	
   
	var pubnub = PUBNUB({
        publish_key : pub_key,
        subscribe_key : sub_key
    })

   // Pubnub funtion to call the classification result

	function pub_subscribe(){
		pubnub.subscribe({
		    channel : channel,
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

	//pubnub function to post our message to the pubnub block

    function pub_publish(pub_msg){
		pubnub.publish({
		    channel : channel,
		    message : pub_msg,
		    callback : function(m){
		        console.log(m);
		    }
		});
	};

	
   // This fucntion is to send message to the pubnub block using the pub_pblish function

	function send_message(){
		inputMessageSubmit.click(function (event) {
	        var feedback = {
	        					
	        					"userMessage":inputMessage.val()
	        				}
	        if(inputMessage.val().length != 0){
	        	pub_publish(feedback);
	        	
	        	inputMessage.val("");
	        }
	    });
		
	    
	};

	// This is after we call the call pub_suncribe function we differentiate between a Suggestion and a Complaint
	function message_listing(m){

		if(m.feedbackClass == "suggestion"){

			document.getElementById('responseClass').innerHTML = m.feedbackClass;
			sCount ++;
			document.getElementById('uMessage').innerHTML = m.userMessage;
			document.getElementById('SuggestionCount').innerHTML = sCount;

			

		}
		else if (m.feedbackClass == "complaint"){

			document.getElementById('responseClass').innerHTML = m.feedbackClass;
			cCount ++;
			document.getElementById('uMessage').innerHTML = m.userMessage;
			document.getElementById('ComplaintCount').innerHTML = cCount;

			

		}
		else{

			console.log("Invalid message");
			console.log("Received message from block : ",m);
			document.getElementById('uMessage').innerHTML = m.userMessage;

		}
		
		 

		
	}
    
    // This exceutes when submit buttion is clicked

	inputMessageSubmit.on( "click", function() {

		send_message();


	});




});
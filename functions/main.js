export default (request) => {
	
	const xhr = require("xhr");
	const pubnub = require("pubnub");
    const db = require("kvstore"); // Database module
    
    var message = {};
    var url_fetched_data = null;

    // Your user name and password

    var username = 'bd97b587-192c-40c1-ab12-8c96f5c60f49';
    var password = 'zVy0gfnPDV2M';
    
    
    var fetched_message_body = null;
    var database_value = null;

	var pubchannel = "ibm_classifier_output";// Your pubnub chanel for output 
	
	const query = require('codec/query_string');
	var query_params = {

		"text": request.message.userMessage
		
	}; 


    // URL to send tthe data to IBM Watson's Natural Language Classifier API 
    const url = ('https://'+username+':'+password+'@gateway.watsonplatform.net/natural-language-classifier/api/v1/classifiers/c53147x243-nlc-6315/classify' + "?" + query.stringify(query_params));
    
    
    
    function broadcastMessage(pubchannel,message){

	// Broadcasting the Message back to the page with Classified class.
	pubnub.publish({
		channel   : pubchannel,
		message   : message,
		callback  : function(e) { 
			console.log( "SUCCESS!", e );
		},
		error     : function(e) { 
			console.log( "FAILED! RETRY PUBLISH!", e );
		}
	});	

}


function fetchUserFeedback(feedback){

	console.log("RECEIVED Feedback",feedback);
	
	

		// Making an external api call for the Classification 
		xhr.fetch(url).then((url_fetched_data) =>{
			var fetched_message_body = JSON.parse(url_fetched_data.body);
			var top_class = fetched_message_body.top_class;
			console.log("FETCHED CLASS FOR RECEIVED FEEDBACK --> ",top_class);
			console.log(fetched_message_body);
			
			
			// Preparing Object with the Claasified Class

			message = {"feedbackClass":top_class};
			
			// Calling the broadcast function to send to message(Classified Class) back to the client
			broadcastMessage(pubchannel,message);

			// Storing the Prepared Object with to the Database with feedback as key.
			db.set(feedback,message);
			
			
			

		}).catch((err) => {
    	// handle request failure
    	console.log("THE API CALL ERROR --> ",err);
    });
		
		
	}

	// make a request to get the message entered by the user 
	db.get(request.message.userMessage).then((database_value)=>{
		console.log("FETCHED DATABASE VALUE",database_value);
		
				var feedback = request.message.userMessage; // Extract the feedback from the incoming Message.
				fetchUserFeedback(feedback);
				
				console.log(request.message);
				
				
	});// db call ending

	return request.ok();
	
};

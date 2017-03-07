function getTempCallback (location, callback) {
	callback(undefined,100);
	callback("City not found");
};

getTempCallback("West Hartford", function (err,temp){
	if (err) {
		console.log("Error", err);
	} else {
		console.log("Success", temp);
	}
});



function getTempPromise (location) {
	returns new Promise (function(resolve,reject) {

	});
};
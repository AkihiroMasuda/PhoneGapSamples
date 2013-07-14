	//Wait for device API libraries to load
	//
	document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        // Update acceleration every 3 seconds
        var options = { frequency: 1000 };
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);        
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        $('#val_x').text('Acc X:' + acceleration.x);
        $('#val_y').text('Acc Y:' + acceleration.y);
        $('#val_z').text('Acc Z:' + acceleration.z);
        $('#val_ts').text('Timestamp:' + acceleration.timestamp);
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
//        alert('onError!');
    }
	
	
	// Wait for device API libraries to load
    //
	function onLoad(){
//		alert("onLoad");
//        setInterval("getAccel()", 1000);
	}

	function getAccel(){
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
	}
	

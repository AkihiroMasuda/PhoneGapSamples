	//Wait for device API libraries to load
	//
	document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
//        alert('Acceleration X: ' + acceleration.x + '\n' +
//              'Acceleration Y: ' + acceleration.y + '\n' +
//              'Acceleration Z: ' + acceleration.z + '\n' +
//              'Timestamp: '      + acceleration.timestamp + '\n');
        $('#val_x').text('Acc X:' + acceleration.x);
        $('#val_y').text('Acc Y:' + acceleration.y);
        $('#val_z').text('Acc Z:' + acceleration.z);
        $('#val_ts').text('Timestamp:' + acceleration.timestamp);
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
//        alert('onError!' + e);
    }
	
	
	// Wait for device API libraries to load
    //
	function onLoad(){
//		alert("onLoad");
        setInterval("getAccel()", 1000);
	}

	function getAccel(){
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
	}
	

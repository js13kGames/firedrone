/** sound Utility Module
 * Monitors and determines whether a key
 * is pressed down at any given moment.
 * Returns getters for each key.
 */
sound = function sound(url, opt) {
    var loop = opt.loop || false;
	// Create an AudioContext instance for this sound
	var audioContext = new (window.AudioContext || window.webkitAudioContext)();
	// Create a buffer for the incoming sound content
	var source = audioContext.createBufferSource();
	var gainNode = audioContext.createGain()
	gainNode.gain.value = 0.05 // 20 % noise,
	
	
	// Create the XHR which will grab the audio contents
	var request = new XMLHttpRequest();
	// Set the audio file src here
	request.open('GET', url, true);
	// Setting the responseType to arraybuffer sets up the audio decoding
	request.responseType = 'arraybuffer';
	request.onload = function() {
	  // Decode the audio once the require is complete
	  audioContext.decodeAudioData(request.response, function(buffer) {
	    source.buffer = buffer;
	    // Connect the audio to source (multiple audio buffers can be connected!)
	    gainNode.connect(audioContext.destination)
	    // now instead of connecting to aCtx.destination, connect to the gainNode
	    source.connect(gainNode)
	    // Simple setting for the buffer
	    source.loop = loop;
	    // Play the sound!
	    source.start(0);
	  }, function(e) {
	    console.log('Audio error! ', e);
	  });
	}
	// Send the request which kicks off 
	request.send();
	return source;
    
}

module.exports = sound;
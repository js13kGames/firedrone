/** System Utility Module
 * Monitors and determines whether a key
 * is pressed down at any given moment.
 * Returns getters for each key.
 */
var system = function () {
    
    // mobile detection
    system.isMobile = function () {
	    
	    if (navigator.userAgent.match(/Android/i)
		    || navigator.userAgent.match(/iPhone/i)
		    || navigator.userAgent.match(/iPad/i)
		    || navigator.userAgent.match(/iPod/i)
		    || navigator.userAgent.match(/BlackBerry/i)
		    || navigator.userAgent.match(/Windows Phone/i)
		    || navigator.userAgent.match(/Opera Mini/i)
		    || navigator.userAgent.match(/IEMobile/i)
	    ) {
		    return true;
	    } else {
		    return false;
	    }
    }
    
}

module.exports = system;
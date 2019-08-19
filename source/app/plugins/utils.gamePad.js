/** gamePad Utility Module
 * Monitors and determines whether a key
 * is pressed down at any given moment.
 * Returns getters for each key.
 */
function gamePad() {
    
    window.gamePad = {};
    container = document.getElementById('container'),
    styles = '<style> .fab {width: 56px;height: 56px;background: #546e7a;border-radius: 50%;box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);color: #fff;display: flex;justify-content: center;align-items: center;cursor: pointer;position: fixed;bottom: 0;right: 0;margin: 25px;-webkit-tap-highlight-color: transparent;-webkit-backface-visibility: hidden;backface-visibility: hidden;overflow: hidden;}.fab.active {background: #faab1a;}.fab__ripple {position: absolute;left: -17px;bottom: -12px;width: 56px;height: 56px;-webkit-transform: scale(0.5);transform: scale(0.5);background: #fff;border-radius: 50%;-webkit-transform-origin: 50%;transform-origin: 50%;transition: -webkit-transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms, -webkit-transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;-webkit-backface-visibility: hidden;backface-visibility: hidden;will-change: transform;z-index: 2;opacity: 0;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.fab:active .fab__ripple {opacity: 0.2;-webkit-transform: scale(1) translate(31%, -22%);transform: scale(1) translate(31%, -22%);}.fab__image {overflow: hidden;z-index: 3;}</style>';
	template =  '<div onclick="share()" style="position: fixed;left: 0;top: 0;" class="fab button__share"><div class="fab__ripple"></div></div>' +
				'<div ontouchstart="window.gamePad.left=true" ontouchend="window.gamePad.left=false" style="margin-right:110px; margin-bottom:65px" class="fab button__left"><div class="fab__ripple"></div></div>' +
				'<div ontouchstart="window.gamePad.right=true" ontouchend="window.gamePad.right=false" style="margin-right:16px; margin-bottom:65px" class="fab button__right"><div class="fab__ripple"></div></div>' +
				'<div ontouchstart="window.gamePad.up=true" ontouchend="window.gamePad.up=false" style="margin-right:66px; margin-bottom:114px" class="fab button__up"><div class="fab__ripple"></div></div>' +
				'<div ontouchstart="window.gamePad.down=true" ontouchend="window.gamePad.down=false" style="margin-right:66px; margin-bottom:16px" class="fab button__down"><div class="fab__ripple"></div></div>',
	container.innerHTML += styles + template;
    
}

module.exports = gamePad();
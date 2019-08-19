!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){var s=i(1),n=i(2),o=i(3),a=i(4),r=i(5),h=i(6),c=(i(7),i(8),i(9)),d=(i(10),document.getElementById("container"));window.game=new function(t,e,i,u){var l;this.constants={width:t,height:e,targetFps:i,showFps:u},this.state={},this.viewport=a.generateCanvas(t,e),this.viewport.id="gameViewport",this.context=this.viewport.getContext("2d"),d.insertBefore(this.viewport,d.firstChild),this.update=n(this),this.render=o(this),this.loop=s(this),l=this;var p=function(t,e,i){var s=this;s.id=i,s.state={radius:10,position:{x:t,y:e}},s.state.radius=20+5*Math.random();var n=25*Math.random()*20;return s.render=function(){l.context.beginPath(),l.context.arc(s.state.position.x,s.state.position.y,s.state.radius,0,2*Math.PI),l.context.fillStyle="#fff",l.context.fill()},s.update=function(){n--,s.state.radius-=.1,s.state.position.x+=Math.random()-.5,s.state.position.y+=Math.random()-.5,(n<0||s.state.radius<0)&&delete window.game.state.entities[s.id]},s},f=function(t,e,i){var s=this;s.id=i,s.state={radius:25,position:{x:t,y:e}},s.state.radius=20+5*Math.random();var n=50*Math.random()*20;return s.render=function(){l.context.beginPath(),l.context.arc(s.state.position.x,s.state.position.y,s.state.radius,0,2*Math.PI),l.context.fillStyle="#40d870",l.context.fill()},s.collision=function(){if(1==(o=s.id,a="player",r=window.game.state.entities[o].state.position.x-window.game.state.entities[a].state.position.x,h=window.game.state.entities[o].state.position.y-window.game.state.entities[a].state.position.y,c=r*r+h*h,(d=window.game.state.entities[o].state.radius+window.game.state.entities[a].state.radius)*d>=c)){for(var t=s.state.radius/10,e=0;e<t;e++)for(var i=0;i<t;i++)dir=function(){return Math.random()>.5?1:-1},window.game.state.entities["water__"+s.id+e+i]=new p(s.state.position.x+e*Math.random()*20*dir(),s.state.position.y+i*Math.random()*20*dir(),"water__"+s.id+e+i);delete window.game.state.entities[s.id],window.game.state.entities.player.state.radius<25&&(window.game.state.entities.player.state.radius+=.1),window.game.state.entities.hub.score+=Math.round(n)}var o,a,r,h,c,d},s.update=function(){n<0||s.state.radius<0?delete window.game.state.entities[s.id]:(n--,s.state.radius+=.1,s.state.position.x+=Math.random()-.5,s.state.position.y+=Math.random()-.5,s.collision())},s},_=function(t,e){var i=this;return new c("./media/blip.wav",{loop:!0}),i.state={radius:10,angle:0,position:{x:t,y:e},moveSpeed:5},i.render=function(){function t(){i.state.angle=360*Math.random()}l.context.beginPath(),l.context.arc(i.state.position.x,i.state.position.y,i.state.radius,0,2*Math.PI),l.context.lineWidth=2.5,l.context.strokeStyle="#fff",l.context.stroke(),l.context.beginPath(),l.context.arc(i.state.position.x-2*i.state.radius,i.state.position.y,i.state.radius,0,2*Math.PI),l.context.lineWidth=2.5,l.context.strokeStyle="#fff",l.context.stroke(),l.context.beginPath(),l.context.arc(i.state.position.x,i.state.position.y-2*i.state.radius,i.state.radius,0,2*Math.PI),l.context.lineWidth=2.5,l.context.strokeStyle="#fff",l.context.stroke(),l.context.beginPath(),l.context.arc(i.state.position.x-2*i.state.radius,i.state.position.y-2*i.state.radius,i.state.radius,0,2*Math.PI),l.context.lineWidth=2.5,l.context.strokeStyle="#fff",l.context.stroke(),l.context.fillStyle="#000",l.context.save(),l.context.translate(i.state.position.x-i.state.radius/2+5,i.state.position.y-2*i.state.radius),l.context.rotate(i.state.angle*Math.PI/180),l.context.fillRect(0,0,i.state.radius,5),l.context.restore(),t(),l.context.save(),l.context.translate(i.state.position.x-i.state.radius/2+5,i.state.position.y),l.context.rotate(i.state.angle*Math.PI/180),l.context.fillRect(0,0,i.state.radius,5),l.context.restore(),t(),l.context.save(),l.context.translate(i.state.position.x-2*i.state.radius-i.state.radius/2+5,i.state.position.y-2*i.state.radius),l.context.rotate(i.state.angle*Math.PI/180),l.context.fillRect(0,0,i.state.radius,5),l.context.restore(),t(),l.context.save(),l.context.translate(i.state.position.x-2*i.state.radius-i.state.radius/2+5,i.state.position.y),l.context.rotate(i.state.angle*Math.PI/180),l.context.fillRect(0,0,i.state.radius,5),l.context.restore()},i.update=function(){(h.isPressed.left||window.joyStick.left()||window.gamePad.left)&&(i.state.position.x-=i.state.moveSpeed),(h.isPressed.right||window.joyStick.right()||window.gamePad.right)&&(i.state.position.x+=i.state.moveSpeed),(h.isPressed.up||window.joyStick.up()||window.gamePad.up)&&(i.state.position.y-=i.state.moveSpeed),(h.isPressed.down||window.joyStick.down()||window.gamePad.down)&&(i.state.position.y+=i.state.moveSpeed),i.state.position.x=i.state.position.x.boundary(3*i.state.radius,l.constants.width-i.state.radius),i.state.position.y=i.state.position.y.boundary(3*i.state.radius,l.constants.height-i.state.radius)},i};return window.joyStick=new r({stationaryBase:!0,baseX:65,baseY:e-90,limitStickTravel:!0,stickRadius:50,strokeStyle:"#546e7a",mouseSupport:!0}),window.joyStick.addEventListener("touchStartValidation",function(t){var e=t.changedTouches[0];return e.pageX<=window.innerWidth/2&&e.pageY>=window.innerHeight/2}),l.state.entities=l.state.entities||{},l.state.entities.player=new _(t/2,e/2),l.state.entities.fireStorm={update:function(){mx=Math.random()*t,my=Math.random()*e,Math.random()<.99||(l.state.entities["flame__"+mx+my]=new f(mx*Math.random(),my*Math.random(),"flame__"+mx+my))},render:function(){}},l.state.entities.hub={score:0,lScore:0,update:function(){},render:function(){l.context.fillStyle="#ff0",count=1,l.context.fillText("score: "+this.score,t-100,65)}},this}(window.innerWidth,window.innerHeight,60,!0),t.exports=game},function(t,e){t.exports=function(t){var e=this,i=t.constants.targetFps,s=1e3/i,n=window.performance.now(),o={new:{frameCount:0,startTime:n,sinceStart:0},old:{frameCount:0,startTime:n,sineStart:0}},a="new";return e.fps=0,e.main=function(r){e.stopLoop=window.requestAnimationFrame(e.main);var h,c,d=r,u=d-n;if(u>s){for(var l in n=d-u%s,o)++o[l].frameCount,o[l].sinceStart=d-o[l].startTime;h=o[a],e.fps=Math.round(1e3/(h.sinceStart/h.frameCount)*100)/100,c=o.new.frameCount===o.old.frameCount?5*i:10*i,h.frameCount>c&&(o[a].frameCount=0,o[a].startTime=d,o[a].sinceStart=0,a="new"===a?"old":"new"),t.state=t.update(d),t.render()}},e.main(),e}},function(t,e){t.exports=function(t){return function(e){var i=t.state||{};if(i.hasOwnProperty("entities")){var s=i.entities;for(var n in s)s[n].update()}return i}}},function(t,e){t.exports=function(t){var e=t.constants.width,i=t.constants.height;return function(){if(t.context.clearRect(0,0,e,i),t.constants.showFps&&(t.context.fillStyle="#ff0",t.context.fillText("fps : "+t.loop.fps,e-100,50)),t.state.hasOwnProperty("entities")){var s=t.state.entities;for(var n in s)s[n].render()}}}},function(t,e){t.exports={getPixelRatio:function(t){return window.devicePixelRatio/["webkitBackingStorePixelRatio","mozBackingStorePixelRatio","msBackingStorePixelRatio","oBackingStorePixelRatio","backingStorePixelRatio"].reduce(function(e,i){return t.hasOwnProperty(i)?t[i]:1})},generateCanvas:function(t,e){var i=document.createElement("canvas"),s=i.getContext("2d"),n=this.getPixelRatio(s);return i.width=Math.round(t*n),i.height=Math.round(e*n),i.style.width=t+"px",i.style.height=e+"px",s.setTransform(n,0,0,n,0,0),i}}},function(t,e){var i,s=function(t){t=t||{},this._container=t.container||document.body,this._strokeStyle=t.strokeStyle||"cyan",this._stickEl=t.stickElement||this._buildJoystickStick(),this._baseEl=t.baseElement||this._buildJoystickBase(),this._mouseSupport=void 0!==t.mouseSupport&&t.mouseSupport,this._stationaryBase=t.stationaryBase||!1,this._baseX=this._stickX=t.baseX||0,this._baseY=this._stickY=t.baseY||0,this._limitStickTravel=t.limitStickTravel||!1,this._stickRadius=void 0!==t.stickRadius?t.stickRadius:100,this._useCssTransform=void 0!==t.useCssTransform&&t.useCssTransform,this._container.style.position="relative",this._container.appendChild(this._baseEl),this._baseEl.style.position="absolute",this._baseEl.style.display="none",this._container.appendChild(this._stickEl),this._stickEl.style.position="absolute",this._stickEl.style.display="none",this._pressed=!1,this._touchIdx=null,!0===this._stationaryBase&&(this._baseEl.style.display="",this._baseEl.style.left=this._baseX-this._baseEl.width/2+"px",this._baseEl.style.top=this._baseY-this._baseEl.height/2+"px"),this._transform=!!this._useCssTransform&&this._getTransformProperty(),this._has3d=this._check3D();var e=function(t,e){return function(){return t.apply(e,arguments)}};this._$onTouchStart=e(this._onTouchStart,this),this._$onTouchEnd=e(this._onTouchEnd,this),this._$onTouchMove=e(this._onTouchMove,this),this._container.addEventListener("touchstart",this._$onTouchStart,!1),this._container.addEventListener("touchend",this._$onTouchEnd,!1),this._container.addEventListener("touchmove",this._$onTouchMove,!1),this._mouseSupport&&(this._$onMouseDown=e(this._onMouseDown,this),this._$onMouseUp=e(this._onMouseUp,this),this._$onMouseMove=e(this._onMouseMove,this),this._container.addEventListener("mousedown",this._$onMouseDown,!1),this._container.addEventListener("mouseup",this._$onMouseUp,!1),this._container.addEventListener("mousemove",this._$onMouseMove,!1))};s.prototype.destroy=function(){this._container.removeChild(this._baseEl),this._container.removeChild(this._stickEl),this._container.removeEventListener("touchstart",this._$onTouchStart,!1),this._container.removeEventListener("touchend",this._$onTouchEnd,!1),this._container.removeEventListener("touchmove",this._$onTouchMove,!1),this._mouseSupport&&(this._container.removeEventListener("mouseup",this._$onMouseUp,!1),this._container.removeEventListener("mousedown",this._$onMouseDown,!1),this._container.removeEventListener("mousemove",this._$onMouseMove,!1))},s.touchScreenAvailable=function(){return"createTouch"in document},(i=s.prototype).addEventListener=function(t,e){return void 0===this._events&&(this._events={}),this._events[t]=this._events[t]||[],this._events[t].push(e),e},i.removeEventListener=function(t,e){void 0===this._events&&(this._events={}),t in this._events!=0&&this._events[t].splice(this._events[t].indexOf(e),1)},i.dispatchEvent=function(t){if(void 0===this._events&&(this._events={}),void 0!==this._events[t])for(var e=this._events[t].slice(),i=0;i<e.length;i++){var s=e[i].apply(this,Array.prototype.slice.call(arguments,1));if(void 0!==s)return s}},s.prototype.deltaX=function(){return this._stickX-this._baseX},s.prototype.deltaY=function(){return this._stickY-this._baseY},s.prototype.up=function(){if(!1===this._pressed)return!1;var t=this.deltaX(),e=this.deltaY();return!(e>=0)&&!(Math.abs(t)>2*Math.abs(e))},s.prototype.down=function(){if(!1===this._pressed)return!1;var t=this.deltaX(),e=this.deltaY();return!(e<=0)&&!(Math.abs(t)>2*Math.abs(e))},s.prototype.right=function(){if(!1===this._pressed)return!1;var t=this.deltaX(),e=this.deltaY();return!(t<=0)&&!(Math.abs(e)>2*Math.abs(t))},s.prototype.left=function(){if(!1===this._pressed)return!1;var t=this.deltaX(),e=this.deltaY();return!(t>=0)&&!(Math.abs(e)>2*Math.abs(t))},s.prototype._onUp=function(){this._pressed=!1,this._stickEl.style.display="none",0==this._stationaryBase&&(this._baseEl.style.display="none",this._baseX=this._baseY=0,this._stickX=this._stickY=0)},s.prototype._onDown=function(t,e){if(this._pressed=!0,0==this._stationaryBase&&(this._baseX=t,this._baseY=e,this._baseEl.style.display="",this._move(this._baseEl.style,this._baseX-this._baseEl.width/2,this._baseY-this._baseEl.height/2)),this._stickX=t,this._stickY=e,!0===this._limitStickTravel){var i=this.deltaX(),s=this.deltaY(),n=Math.sqrt(i*i+s*s);if(n>this._stickRadius){var o=i/n,a=s/n;this._stickX=o*this._stickRadius+this._baseX,this._stickY=a*this._stickRadius+this._baseY}}this._stickEl.style.display="",this._move(this._stickEl.style,this._stickX-this._stickEl.width/2,this._stickY-this._stickEl.height/2)},s.prototype._onMove=function(t,e){if(!0===this._pressed){if(this._stickX=t,this._stickY=e,!0===this._limitStickTravel){var i=this.deltaX(),s=this.deltaY(),n=Math.sqrt(i*i+s*s);if(n>this._stickRadius){var o=i/n,a=s/n;this._stickX=o*this._stickRadius+this._baseX,this._stickY=a*this._stickRadius+this._baseY}}this._move(this._stickEl.style,this._stickX-this._stickEl.width/2,this._stickY-this._stickEl.height/2)}},s.prototype._onMouseUp=function(t){return this._onUp()},s.prototype._onMouseDown=function(t){t.preventDefault();var e=t.clientX,i=t.clientY;return this._onDown(e,i)},s.prototype._onMouseMove=function(t){var e=t.clientX,i=t.clientY;return this._onMove(e,i)},s.prototype._onTouchStart=function(t){if(null===this._touchIdx&&!1!==this.dispatchEvent("touchStartValidation",t)){this.dispatchEvent("touchStart",t),t.preventDefault();var e=t.changedTouches[0];this._touchIdx=e.identifier;var i=e.pageX,s=e.pageY;return this._onDown(i,s)}},s.prototype._onTouchEnd=function(t){if(null!==this._touchIdx){this.dispatchEvent("touchEnd",t);for(var e=t.changedTouches,i=0;i<e.length&&e[i].identifier!==this._touchIdx;i++);if(i!==e.length)return this._touchIdx=null,t.preventDefault(),this._onUp()}},s.prototype._onTouchMove=function(t){if(null!==this._touchIdx){for(var e=t.changedTouches,i=0;i<e.length&&e[i].identifier!==this._touchIdx;i++);if(i!==e.length){var s=e[i];t.preventDefault();var n=s.pageX,o=s.pageY;return this._onMove(n,o)}}},s.prototype._buildJoystickBase=function(){var t=document.createElement("canvas");t.width=126,t.height=126;var e=t.getContext("2d");return e.beginPath(),e.strokeStyle=this._strokeStyle,e.lineWidth=6,e.arc(t.width/2,t.width/2,40,0,2*Math.PI,!0),e.stroke(),e.beginPath(),e.strokeStyle=this._strokeStyle,e.lineWidth=2,e.arc(t.width/2,t.width/2,60,0,2*Math.PI,!0),e.stroke(),t},s.prototype._buildJoystickStick=function(){var t=document.createElement("canvas");t.width=86,t.height=86;var e=t.getContext("2d");return e.beginPath(),e.strokeStyle=this._strokeStyle,e.lineWidth=6,e.arc(t.width/2,t.width/2,40,0,2*Math.PI,!0),e.stroke(),t},s.prototype._move=function(t,e,i){this._transform?this._has3d?t[this._transform]="translate3d("+e+"px,"+i+"px, 0)":t[this._transform]="translate("+e+"px,"+i+"px)":(t.left=e+"px",t.top=i+"px")},s.prototype._getTransformProperty=function(){for(var t,e=["webkitTransform","MozTransform","msTransform","OTransform","transform"],i=document.createElement("p"),s=0;s<e.length;s++)if(t=e[s],null!=i.style[t])return t},s.prototype._check3D=function(){var e=this._getTransformProperty();if(!e||!window.getComputedStyle)return t.exports=!1;var i=document.createElement("div");i.style[e]="translate3d(1px,1px,1px)",document.body.insertBefore(i,null);var s=getComputedStyle(i).getPropertyValue({webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"}[e]);return document.body.removeChild(i),null!=s&&s.length&&"none"!=s},t.exports=s},function(t,e){t.exports=function(){var t,e,i,s;return this.isPressed={},document.onkeydown=function(n){39===n.keyCode&&(e=!0),37===n.keyCode&&(t=!0),38===n.keyCode&&(i=!0),40===n.keyCode&&(s=!0)},document.onkeyup=function(n){39===n.keyCode&&(e=!1),37===n.keyCode&&(t=!1),38===n.keyCode&&(i=!1),40===n.keyCode&&(s=!1)},Object.defineProperty(this.isPressed,"left",{get:function(){return t},configurable:!0,enumerable:!0}),Object.defineProperty(this.isPressed,"right",{get:function(){return e},configurable:!0,enumerable:!0}),Object.defineProperty(this.isPressed,"up",{get:function(){return i},configurable:!0,enumerable:!0}),Object.defineProperty(this.isPressed,"down",{get:function(){return s},configurable:!0,enumerable:!0}),this}()},function(t,e){var i=function(t,e){return Math.min(Math.max(this,t),e)};Number.prototype.boundary=i,t.exports=i},function(t,e){var i=function(){i.isMobile=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i))}};t.exports=i},function(t,e){sound=function(t,e){var i=e.loop||!1,s=new(window.AudioContext||window.webkitAudioContext),n=s.createBufferSource(),o=s.createGain();o.gain.value=.05;var a=new XMLHttpRequest;return a.open("GET",t,!0),a.responseType="arraybuffer",a.onload=function(){s.decodeAudioData(a.response,function(t){n.buffer=t,o.connect(s.destination),n.connect(o),n.loop=i,n.start(0)},function(t){console.log("Audio error! ",t)})},a.send(),n},t.exports=sound},function(t,e){t.exports=(window.gamePad={},container=document.getElementById("container"),styles="<style> .fab {width: 56px;height: 56px;background: #546e7a;border-radius: 50%;box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);color: #fff;display: flex;justify-content: center;align-items: center;cursor: pointer;position: fixed;bottom: 0;right: 0;margin: 25px;-webkit-tap-highlight-color: transparent;-webkit-backface-visibility: hidden;backface-visibility: hidden;overflow: hidden;}.fab.active {background: #faab1a;}.fab__ripple {position: absolute;left: -17px;bottom: -12px;width: 56px;height: 56px;-webkit-transform: scale(0.5);transform: scale(0.5);background: #fff;border-radius: 50%;-webkit-transform-origin: 50%;transform-origin: 50%;transition: -webkit-transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms, -webkit-transform 0.35s cubic-bezier(0, 0, 0.3, 1) 0ms;-webkit-backface-visibility: hidden;backface-visibility: hidden;will-change: transform;z-index: 2;opacity: 0;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.fab:active .fab__ripple {opacity: 0.2;-webkit-transform: scale(1) translate(31%, -22%);transform: scale(1) translate(31%, -22%);}.fab__image {overflow: hidden;z-index: 3;}</style>",template='<div onclick="share()" style="position: fixed;left: 0;top: 0;" class="fab button__share"><div class="fab__ripple"></div></div><div ontouchstart="window.gamePad.left=true" ontouchend="window.gamePad.left=false" style="margin-right:110px; margin-bottom:65px" class="fab button__left"><div class="fab__ripple"></div></div><div ontouchstart="window.gamePad.right=true" ontouchend="window.gamePad.right=false" style="margin-right:16px; margin-bottom:65px" class="fab button__right"><div class="fab__ripple"></div></div><div ontouchstart="window.gamePad.up=true" ontouchend="window.gamePad.up=false" style="margin-right:66px; margin-bottom:114px" class="fab button__up"><div class="fab__ripple"></div></div><div ontouchstart="window.gamePad.down=true" ontouchend="window.gamePad.down=false" style="margin-right:66px; margin-bottom:16px" class="fab button__down"><div class="fab__ripple"></div></div>',void(container.innerHTML+=styles+template))}]);
function share (){
	navigator.share({
	  title: document.title,
	  text: 'am playing this new game, called FITB🌳 ',
	  url: window.location.href
	})
	
	.then(function() {})
	.catch(function (error) {})
}
(function ($, window, document, undefined) {

	// Functions
	function setActive (elem) {
		if (elem){
			$('li#home').removeClass('active');
			$('li#aboutme').removeClass('active');
			$('li#portfolio').removeClass('active');
			$('li#contact').removeClass('active');

			$('li#' + elem).addClass('active');
		}
	}
	
	// Content request
	var content = {};

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "content.json", true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4){
			var status = xhr.status;
			
			if( (status >= 200 && status < 300) || status === 304 ){
				content = JSON.parse(xhr.responseText);
				
				// appending content to html
				// ...
			}
		}
	};

	xhr.send(null);

	// Switching context handler
	$('li#home').on('click', function (e) {
		setActive("home");

		// content emerge
		// ...
	});
	$('li#aboutme').on('click', function (e) {
		setActive("aboutme");

		// content emerge
		// ...
	});
	$('li#portfolio').on('click', function (e) {
		setActive("portfolio");

		// content emerge
		// ...
	});
	$('li#contact').on('click', function (e) {
		setActive("contact");

		// content emerge
		// ...
	});

	


	// Read hash
	var hash = (window.location.hash).substr(1) || null;
	setActive(hash);

})(jQuery, window, document);
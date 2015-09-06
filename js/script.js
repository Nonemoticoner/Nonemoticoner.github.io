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
				
				// Set expected content from hash
				switch(hash){
					case "home":
						var template = Handlebars.compile( $("#homeTemplate").html() );
						$("div#da-content").empty().append( template(content.home) );
						break;
					case "aboutme":
						var template = Handlebars.compile( $("#aboutmeTemplate").html() );
						$("div#da-content").empty().append( template(content.aboutme) );
						break;
					case "portfolio":
						var template = Handlebars.compile( $("#portfolioTemplate").html() );
						$("div#da-content").empty().append( template(content.portfolio) );
						break;
					case "contact":
						var template = Handlebars.compile( $("#contactTemplate").html() );
						$("div#da-content").empty().append( template(content.contact) );
						break;
					default:
						var template = Handlebars.compile( $("#homeTemplate").html() );
						$("div#da-content").empty().append( template(content.home) );
				}
			}
		}
	};

	xhr.send(null);

	// Switching context handler
	$('li#home').on('click', function (e) {
		setActive("home");

		// template execution
		var template = Handlebars.compile( $("#homeTemplate").html() );
		$("div#da-content").empty().append( template(content.home) );
	});
	$('li#aboutme').on('click', function (e) {
		setActive("aboutme");

		var template = Handlebars.compile( $("#aboutmeTemplate").html() );
		$("div#da-content").empty().append( template(content.aboutme) );
	});
	$('li#portfolio').on('click', function (e) {
		setActive("portfolio");

		var template = Handlebars.compile( $("#portfolioTemplate").html() );
		$("div#da-content").empty().append( template(content.portfolio) );
	});
	$('li#contact').on('click', function (e) {
		setActive("contact");

		var template = Handlebars.compile( $("#contactTemplate").html() );
		$("div#da-content").empty().append( template(content.contact) );
	});

	


	// Read hash
	var hash = (window.location.hash).substr(1) || null;
	setActive(hash);

})(jQuery, window, document);
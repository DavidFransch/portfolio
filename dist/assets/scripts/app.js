const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Lifesaving",
				weight: 13
			}, {
				text: "Hackathons",
				weight: 11
			}, {
				text: "Hiking Outreach",
				weight: 14
			}, {
				text: "IEEE Outreach",
				weight: 10
			}, {
				text: "Technical Workshops",
				weight: 11
			}, {
				text: "Networking Events",
				weight: 10
			}, {
				text: "",
				weight: 9
			}, {
				text: "",
				weight: 15
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an Electrical & Computer Engineer.", "build Software Applications.", "like learning about new technology.", "I solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

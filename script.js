(function ($) {
	"use strict";

	//Page cursors

	document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
		t.style.left = n.clientX + "px",
			t.style.top = n.clientY + "px",
			e.style.left = n.clientX + "px",
			e.style.top = n.clientY + "px",
			i.style.left = n.clientX + "px",
			i.style.top = n.clientY + "px"
	});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function n(t) {
		e.classList.add("hover"), i.classList.add("hover")
	}
	function s(t) {
		e.classList.remove("hover"), i.classList.remove("hover")
	}
	s();
	for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
		o(r[a])
	}
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
	}

	//hero section live typing section

	const texts = ["Web Developer", "UI/UX Designer", "AI Enthusiast"];
	let count = 0;
	let index = 0;
	let currentText = "";
	let letter = "";

	(function type() {
		if (count === texts.length) {
			count = 0;
		}
		currentText = texts[count];
		letter = currentText.slice(0, ++index);

		document.getElementById("typing-text").textContent = letter;
		if (letter.length === currentText.length) {
			count++;
			index = 0;
			setTimeout(type, 1200); // Pause before next word
		} else {
			setTimeout(type, 150); // Typing speed
		}
	})();


	//About page

	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});


	//Contact page

	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});


	//Travel portfolio page

	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});


	//Wildlife portfolio page

	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});


	//Nature portfolio page

	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

})(jQuery);

function $(Nid) {
	return document.getElementById(Nid);
}

function changeIcon(x) {
	x.classList.toggle("change");
}

function toggleNav() {
	var winY = window.scrollY;
	var isVisible = $("sideNav").style.visibility = $("sideNav").style.visibility === "visible" ? 'hidden' : 'visible';
	$("sideNav").style.height = $("sideNav").style.height === "100%" ? '0' : '100%';
	if (isVisible == "visible") {
		disableScrolling();
	} else {
		enableScrolling();
	}
}

function disableScrolling() {
	var x = window.scrollX;
	var y = window.scrollY;
	window.onscroll = function () {
		window.scrollTo(x, y);
	};
}

function enableScrolling() {
	window.onscroll = function () {};
}

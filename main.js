function changeIcon(x) {
	x.classList.toggle("change");
}

function toggleNav() {
    var sidenav = document.getElementById("sideNav"),
    main = document.getElementById("main");
	sidenav.style.visibility = sidenav.style.visibility === "visible" ? 'hidden' : 'visible';
    sidenav.style.height = sidenav.style.height === "100%" ? '0' : '100%';
    main.style.marginTop = main.style.marginTop === "100%" ? '0' :  '100%';	
}
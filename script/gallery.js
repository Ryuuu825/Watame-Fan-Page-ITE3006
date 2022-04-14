var currentIndex = 0;
var cImg = document.getElementsByClassName("carousel_img");
// var cBtn = document.getElementsByClassName("car_btn");
var cBtn = document.getElementsByName("car_btn");
var timer;
/**
 * init the first image
 */
function showStartImage() {
	cImg[currentIndex].style.display = "inline-block";
	cImg[currentIndex].style.order = "1";
	cBtn[currentIndex].classList.toggle("car_btn_change");

	if (currentIndex < cImg.length - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;
	}
	/**
	 * set a system timer to show the carouse image
	 */
	timer = setInterval(showCarouselImage, 3000);
}

/**
 * carouse image
 */
function showCarouselImage() {
	/**
	 * the default order is "2", 
	 * change the order value to "1" for showing the current image
	 * and set the previous image to "2"
	 * if the index of the image shown is 0, 
	 * the order value of last image of the image group will be set to "2"
	 */
	if (currentIndex - 1 >= 0) {
		cImg[currentIndex - 1].style.order = "2";
		cImg[currentIndex - 1].style.display = "none"; //hide the perious image
		cBtn[currentIndex - 1].classList.toggle("car_btn_change");
	} else {
		cImg[cImg.length - 1].style.order = "2";
		cImg[cImg.length - 1].style.display = "none"; //hide the perious image
		cBtn[cImg.length - 1].classList.toggle("car_btn_change");
	}

	cImg[currentIndex].style.order = "1";
	cImg[currentIndex].style.display = "inline-block"; //show the current image
	cBtn[currentIndex].classList.toggle("car_btn_change");

	//set currently shown image index
	if (currentIndex < cImg.length - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;
	}
}

function showCarouselImageOfIndex(index) {
	//stop the timer
	clearInterval(timer);
	cBtn[currentIndex - 1].className = "car_btn";
	cImg[currentIndex - 1].style.order = "2";
	cImg[currentIndex - 1].style.display = "none";
	currentIndex = index;
	/**
	 * reset the start up image
	 */
	 showStartImage();
}

function diplayBigImage(obj) {
	document.getElementById("bigImage").src = obj.src;
	document.getElementsByClassName("bigImage_container")[0].style.display = "block";
	document.getElementsByClassName("menu_btn_container")[0].style.display = "none";
}

function hideBigImage() {
	document.getElementById("bigImage").src = "";
	document.getElementsByClassName("bigImage_container")[0].style.display = "none";
	document.getElementsByClassName("menu_btn_container")[0].style.display = "block";
}
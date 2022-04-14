var currentIndex = 0;

/**
 * init the first image
 */
function showDefaultImage() {
	var cImg = document.getElementsByClassName("carousel_img");
	cImg[0].style.display = "inline-block";
	currentIndex = 1;
}

/**
 * set a system timer to show the carouse image
 */
var timer = setInterval(showCarouselImage, 3000);


/**
 * carouse image
 */
function showCarouselImage() {
	var cImg = document.getElementsByClassName("carousel_img");
	var imgLength = cImg.length;
	
	/**
	 * the default order is "2", 
	 * change the order value to "1" for showing the current image
	 * and set the previous image to "2"
	 * if the index of the image shown is 0, 
	 * the order value of last image of the image group will be set to "2"
	 */
	if (currentIndex-1 >= 0){
		cImg[currentIndex-1].style.order = "2";
		cImg[currentIndex-1].style.display = "none"; //hide the perious image
	}else {
		cImg[cImg.length-1].style.order = "2";
		cImg[cImg.length-1].style.display = "none"; //hide the perious image
	}
	cImg[currentIndex].style.order = "1";
	cImg[currentIndex].style.display = "inline-block"; //show the current image
	
	//set currently shown image index
	if(currentIndex < imgLength-1){
		currentIndex++; 
	}else {
		currentIndex = 0;
	}
}

function diplayBigImage(x) {
	document.getElementById("bigImage").src = x.src;
	document.getElementsByClassName("bigImage_container")[0].style.display = "block";
	document.getElementsByClassName("menu_btn_container")[0].style.display = "none";
}

function hideBigImage(x) {
	document.getElementById("bigImage").src = x.src;
	document.getElementsByClassName("bigImage_container")[0].style.display = "none";
	document.getElementsByClassName("menu_btn_container")[0].style.display = "block";
}
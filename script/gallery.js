var currentIndex = 0;

function showDefaultImage() {
	var cImg = document.getElementsByClassName("carousel_img");
	cImg[0].style.display = "inline-block";
	currentIndex = 1;
}

var timer = setInterval(showCarouselImage, 3000);

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
		cImg[currentIndex-1].style.display = "none";
	}else {
		cImg[cImg.length-1].style.order = "2";
		cImg[cImg.length-1].style.display = "none";
	}
	cImg[currentIndex].style.order = "1";
	cImg[currentIndex].style.display = "inline-block";
	if(currentIndex < imgLength-1){
		currentIndex++;
	}else {
		currentIndex = 0;
	}
}
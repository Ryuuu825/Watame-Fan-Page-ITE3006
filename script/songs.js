let index = 1;
let slides = document.getElementsByClassName("slide");
let menu_option = document.getElementsByClassName("option");
let all_iframe = document.getElementsByTagName('iframe')

// load all iframe when the page is loaded
function load_youtube_video()
{

	var src = [
		'_T4euQ8qnn8' , 
		'6VGkeUaX-zk' ,
		'P_ptI5iH7Vg' ,
		'j5n1zqsvfXo' ,
		'6K-LSyE1Ywg' 
	]
	for (i = 0; i < src.length; i++)
	{
		all_iframe[i].src = "https://www.youtube.com/embed/" + src[i] + "?enablejsapi=1";
	}

	
}

// show next slide
function nextSlide(num)
{
	index += num;
	if(index > slides.length)
	{
		index = 1;
	}
	else if(index < 1)
	{
		index = slides.length;
	}

	showSlide(index-1);
}

// show the slide
function showSlide(num)
{

	for (let i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
				
	}
	slides[num].style.display = "block";

	// stop the video
	stopAllVideo();
}

function stopAllVideo()
{
	for (let i = 0; i < all_iframe.length; i++)
	{
		all_iframe[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
	
}

function loadCoverSong(num)
{
	let coverList = [
		"6K-LSyE1Ywg",
		"Um7SFkR-fEg",
		"OR1Epbc_NNE",
		"K2Svy59O-KA",
		"E3oy7AxOHrI"
	]
	let all_cover_option = document.getElementsByClassName("cover_option");
	let cover_iframe = document.getElementById("cover_iframe");

	// clear the color before foucs on
	for (let i = 0; i < all_cover_option.length; i++)
	{
		all_cover_option[i].style.color = "black";
		all_cover_option[i].style.fontWeight = "normal";
		all_cover_option[i].style.fontSize = "30px";
	}
	all_cover_option[num].style.color = "blue";
	all_cover_option[num].style.fontWeight = "bold";
	all_cover_option[num].style.fontSize = "35px";
	cover_iframe.src = "https://www.youtube.com/embed/" + coverList[num];
}

function showPopUp()
{
	let container = document.getElementsByClassName("pop_up_container")[0];
	container.style.display = "block";
	document.getElementsByClassName("menu_btn_container")[0].style.display = "none";

	
}

function hidePopUp()
{
	let container = document.getElementsByClassName("pop_up_container")[0];
	let iframe = document.getElementById("pop_up");
	iframe.src = ""; // stop the video

	container.style.display = "none";
	document.getElementsByClassName("menu_btn_container")[0].style.display = "block";

}

function playSong(link)
{
	showPopUp();
	let iframe = document.getElementById("pop_up");
	iframe.src = "https://www.youtube.com/embed/" + link;

}

function showGif(num, link)
{
	var img_tag = document.getElementsByClassName("gif")[num];
	img_tag.src = link;
}
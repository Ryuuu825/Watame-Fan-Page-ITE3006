let index = 0; // the index of current slide
let slides = document.getElementsByClassName("slide");
let menu_option = document.getElementsByClassName("option");
let all_iframe = document.getElementsByTagName('iframe')

// load all iframe when the page is loaded
function load_youtube_video()
{

	// all the link of youtube video that will be loaded
	var src = [
		'_T4euQ8qnn8' , 
		'6VGkeUaX-zk' ,
		'P_ptI5iH7Vg' ,
		'j5n1zqsvfXo' ,
		'6K-LSyE1Ywg'  // the first one in the cover song list
	]
	for (i = 0; i < src.length; i++)
	{
		all_iframe[i].src = "https://www.youtube.com/embed/" + src[i] + "?enablejsapi=1";
	}
}

function hideSubMenu() {
	var obj = document.getElementsByClassName("sub_menu");
	for(i=0;i<obj.length;i++)
		obj[i].className = "sub_menu";
}

// show next slide
function nextSlide(num)
{
	index += num;
	if(index > slides.length)
	{
		index = 0;
	}
	else if(index < 0)
	{
		index = slides.length;
	}

	showSlide(index);
}

// show the slide
function showSlide(num)
{

	for (let i = 0; i < slides.length; i++)
	{
		// hide all the slide first
		slides[i].style.display = "none";			
	}
	slides[num].style.display = "block";

	// stop the streaming video
	stopAllVideo();
}

function stopAllVideo()
{
	for (let i = 0; i < all_iframe.length; i++)
	{
		// send a post message to youtube api to stop the video
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
	// change the color of the selected option
	all_cover_option[num].style.color = "blue";
	all_cover_option[num].style.fontWeight = "bold";
	all_cover_option[num].style.fontSize = "35px";

	// change the iframe src
	cover_iframe.src = "https://www.youtube.com/embed/" + coverList[num];
}

// show the pop up container
function showPopUp()
{
	let container = document.getElementsByClassName("pop_up_container")[0];
	container.style.display = "block";
	// display the menu button
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

// play a video in the pop up window iframe
function playSong(link)
{
	showPopUp();
	let iframe = document.getElementById("pop_up");
	iframe.src = "https://www.youtube.com/embed/" + link;
}

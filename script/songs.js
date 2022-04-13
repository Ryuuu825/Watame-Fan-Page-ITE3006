let index = 1;
let slides = document.getElementsByClassName("slide");
let menu_option = document.getElementsByClassName("option");
let all_iframe = document.getElementsByTagName("iframe");

function load_youtube_video()
{

	var src = [
		'_T4euQ8qnn8' , 
		'6VGkeUaX-zk' ,
		'j5n1zqsvfXo' ,
		'dLL6Z8LGFkQ' ,
		'PaCYw28Ta-w' ,
		'DGun2cWbPEM' ,
		'P8OjkcLzYCM' ,
		'dLL6Z8LGFkQ' ,
		'L_JvgkZ04t0' ,
		'l44ih2KWJAo' ,
		'B3rZm2cN5ZY' ,
		'ndNWnIAdhZo' ,
		'5KsXVs8Vg7U'
	]
	for (i = 0; i < src.length; i++)
	{
		all_iframe[i].src = "https://www.youtube.com/embed/" + src[i] + "?enablejsapi=1";
	}



	
}

function setBG(num)
{
	menu_option[num].style.backgroundColor = "#063f5c";
}

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

function showSlide(num)
{

	for (let i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
				
	}
	slides[num].style.display = "block";
}

function stopAllVideo()
{
	for (let i = 0; i < all_iframe.length; i++)
	{
		all_iframe[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
	
}

function foucsOn(num)
{
	let all_cover_option = document.getElementsByClassName("cover_option");

	// clear the color before foucs on
	for (let i = 0; i < all_cover_option.length; i++)
	{
		all_cover_option[i].style.color = "black";
	}
	all_cover_option[num].style.color = "blue";
}
<<<<<<< Updated upstream
// check the phone number which the first one should be +, along with area code and phone number
const phone_regex = ''

function checkForm() {
	if (/^[\+][\d]{3}[ ][\d]+/.test(document.contact_form.phone.value) )
	{
		alert('Thank you for your message!');
		return false;
	}
		
	else 
	{
		document.getElementsByClass('label').style.display = 'flex';
		return false;
	}

	return flase
=======


function checkForm() {
	alert('Called check form');
	if (/^[\+][\d]{3}[ ][\d]+/.test(document.contact_form.phone.value) )
	{
		alert('Thank you for your message!');
	}
	else 
	{
		alert('Please enter a valid phone number');
		document.getElementsByClass('label').style.display = 'flex';
	}

>>>>>>> Stashed changes
		

}
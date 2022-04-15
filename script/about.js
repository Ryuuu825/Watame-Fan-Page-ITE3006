function checkForm() {
	let canSend = true;

	if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/.test(document.contact_form.email.value)) 
	{
		document.getElementsByClassName('label')[0].style.display = 'flex';
		document.contact_form.email.style.border = "3px solid #DC3232";
		canSend = false;
	}
	else 
	{
		document.getElementsByClassName('label')[0].style.display = 'none';
		document.contact_form.email.style.border = "1px solid #ccc";
	}
	if (! /^[\+][\d]{3}[ ][\d]+/.test(document.contact_form.phone.value) )
	{
		document.getElementsByClassName('label')[1].style.display = 'flex';
		document.contact_form.phone.style.border = '3px solid #DC3232';
		document.contact_form.phone.value = "";

		canSend = false;
	}
	else 
	{
		document.getElementsByClassName('label')[1].style.display = 'none';
		document.contact_form.phone.style.border = '1px solid #ccc';
	}
	if (document.contact_form.message.value.length < 10)
	{
		document.contact_form.message.style.border = '3px solid #DC3232';
		document.getElementsByClassName('label')[2].style.display = 'flex';
		canSend = false;
	}
	else 
	{
		document.contact_form.message.style.border = '1px solid #ccc';
		document.getElementsByClassName('label')[2].style.display = 'none';
	}
	return canSend;
}


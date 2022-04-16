function checkForm() {
	let canSend = true;

	if (document.contact_form.message.value.length < 10)
	{
		document.contact_form.message.style.border = '3px solid #DC3232';
		document.contact_form.message.focus(); // focus on the field
		document.getElementsByClassName('label')[2].style.display = 'flex';
		canSend = false;
	}
	else 
	{
		document.contact_form.message.style.border = '1px solid #F59A23';
		document.getElementsByClassName('label')[2].style.display = 'none';
	}

	if (! /^[\+][\d]{3}[ ][\d]+/.test(document.contact_form.phone.value) )
	{
		document.getElementsByClassName('label')[1].style.display = 'flex';
		document.contact_form.phone.style.border = '3px solid #DC3232';
		document.contact_form.phone.focus(); // focus on the field

		document.contact_form.phone.value = "";

		canSend = false;
	}
	else 
	{
		document.getElementsByClassName('label')[1].style.display = 'none';
		document.contact_form.phone.style.border = '1px solid #F59A23';
	}

	if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/.test(document.contact_form.email.value)) 
	{
		document.getElementsByClassName('label')[0].style.display = 'flex';
		document.contact_form.email.style.border = "3px solid #DC3232";
		document.contact_form.email.focus(); // focus on the field
		canSend = false;
	}
	else  // correct 
	{
		document.getElementsByClassName('label')[0].style.display = 'none';
		document.contact_form.email.style.border = "1px solid #F59A23";
	}


	return canSend;
}

function changeBorderColor(target)
{
	target.style.border = '1px solid #F59A23';
}

function resetForm(result)
{
	if ( result )
	{
		document.getElementsByClassName('label')[0].style.display = 'none';
		document.getElementsByClassName('label')[1].style.display = 'none';
		document.getElementsByClassName('label')[2].style.display = 'none';
	
		document.contact_form.email.style.border = "1px solid #F59A23";
		document.contact_form.phone.style.border = "1px solid #F59A23";
		document.contact_form.message.style.border = "1px solid #F59A23";
		return true;
	}
	else 
	{
		return false; // disable default reset button
	}


}

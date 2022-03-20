function checkForm() {
	var $ = document.forms["contact_form"];
	var name = $["name"].value;
	var email = $["email"].value;
	var phone = $["phone"].value;
	var message = $["message"].value;
	if (name == null || name == "") {
		alert("Your name must be entered.");
		$["name"].focus();
		return false;
	} else if (email == null || email == "") {
		alert("Your email must be entered.");
		$["email"].focus();
		return false;
	} else if (phone == null || phone == "") {
		alert("Your phone must be entered.");
		$["phone"].focus();
		return false;
	} else if (message == null || message == "") {
		alert("Your message must be entered.");
		$["message"].focus();
		return false;
	}
	alert("Oh my gosh! Thank you for your message!");
	return true;
}

function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.match(document.forms["contact_form"][])) {
		return true;
	}
	alert("You have entered an invalid email address!");
	return false;
}

function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.match(document.forms["contact_form"][])) {
		return true;
	}
	alert("You have entered an invalid email address!");
	return false;
}
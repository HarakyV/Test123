function checkPassword() {
	const password = document.getElementById("password").value;
	if (password === "mypassword") {
		// Password is correct, display new page
		window.location.href = "newpage.html";
	} else {
		// Password is incorrect, display error message
		alert("Incorrect password. Please try again.");
	}
}

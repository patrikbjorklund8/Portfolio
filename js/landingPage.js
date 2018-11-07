function checkPassword() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elMsg.textContent = 'Lösenordet måste innehålla 5 tecken eller fler';
	} else {
		elMsg.textContent = '';
	}
}

var elPassword = document.getElementById('password');
elPassword.addEventListener('blur', checkPassword, false);

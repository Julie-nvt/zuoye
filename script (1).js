function checkPassword() {
  const password = document.getElementById('password-input').value;
  const passwordContainer = document.getElementById('password-container');
  const content = document.getElementById('content');
  const errorMessage = document.getElementById('error-message');

  if (password === 'trinhdethuong') {
    passwordContainer.style.display = 'none';
    content.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
}

// Allow pressing Enter to submit password
document.getElementById('password-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
});
const form = document.getElementById('form');
const thanks = document.getElementById('thanks');
const dismissButton = document.getElementById('dismissButton');
const EmailInput = document.getElementById('email_input');
const email = document.getElementById('email');


EmailInput.addEventListener('input', function() {
  if (EmailInput.value.trim() !== '') {
      EmailInput.classList.remove('invalid');
  }
});
// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const EmailValue = EmailInput.value;
  if (!validateEmail(EmailValue)) {
    EmailInput.classList.add('invalid');
    return;
  }

  EmailInput.classList.remove('invalid');
  thanks.style.display = 'flex'; 
  form.style.display = 'none';
  const emailValue = EmailInput.value;
  email.innerHTML = emailValue;
});

// Add event listener to the dismiss button
dismissButton.addEventListener('click', function() {
  thanks.style.display = 'none'; 
  form.style.display = 'flex';
});

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
const form = document.getElementById('form');
const thanks = document.getElementById('thanks');
const dismissButton = document.getElementById('dismissButton');
const EmailInput = document.getElementById('email_input');
const email = document.getElementById('email');


// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
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
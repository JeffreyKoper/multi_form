const form = document.getElementById('form');
const thanks = document.getElementById('thanks');
const dismissButton = document.getElementById('dismissButton');


// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  thanks.style.display = 'flex'; 
  form.style.display = 'none';
});

// Add event listener to the dismiss button
dismissButton.addEventListener('click', function() {
  thanks.style.display = 'none'; 
  form.style.display = 'flex';
});
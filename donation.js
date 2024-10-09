document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
  
    if (name && email && amount) {
      const message = `Thank you, ${name}! Your donation of $${amount} has been received.`;
      document.getElementById('donationMessage').innerText = message;
  
      // Clear the form fields after submission
      document.getElementById('donationForm').reset();
    } else {
      document.getElementById('donationMessage').innerText = 'Please fill out all fields correctly.';
    }
  });
  
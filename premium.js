document.getElementById('premium-button').addEventListener('click', function() {
	document.getElementById('gateway').style.display = 'block';
  });
  
  document.getElementById('silver-button').addEventListener('click', function() {
	openGateway('silver', 90);
  });
  
  document.getElementById('gold-button').addEventListener('click', function() {
	openGateway('gold', 180);
  });
  
  document.getElementById('diamond-button').addEventListener('click', function() {
	openGateway('diamond', 3000);
  });
  
  function openGateway(packageName, amount) {
	// Set up Stripe payment gateway
	const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');
  
	// Create a payment form
	const paymentForm = document.createElement('form');
	paymentForm.setAttribute('method', 'POST');
	paymentForm.setAttribute('action', '/charge');
  
	// Add a hidden input field for the package name
	const packageInput = document.createElement('input');
	packageInput.setAttribute('type', 'hidden');
	packageInput.setAttribute('name', 'package');
	packageInput.setAttribute('value', packageName);
	paymentForm.appendChild(packageInput);
  
	// Add a hidden input field for the amount
	const amountInput = document.createElement('input');
	amountInput.setAttribute('type', 'hidden');
	amountInput.setAttribute('name', 'amount');
	amountInput.setAttribute('value', amount);
	paymentForm.appendChild(amountInput);
  
	// Add a submit button
	const submitButton = document.createElement('button');
	submitButton.textContent = 'Pay Now';
	paymentForm.appendChild(submitButton);
  
	// Submit the payment form
	paymentForm.submit();
  }
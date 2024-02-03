let button = document.querySelector('button');
let form = document.querySelector('form');
let error = document.querySelector('.error');

// email error message//

function checkEmail (e) {
  e.preventDefault();
  let email = e.target.querySelector('[type="email"]').value;
  if (!validateEmail(email)){
    error.innerHTML = "Oops! Please check your email";
  } else {
    error.innerHTML = "";
  }
}

// email checking //

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const mail = form.elements['email'].value.trim();
  const pass = form.elements['password'].value.trim();

  if (!mail || !pass) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: mail,
    password: pass,
  };

  console.log(formData);
  form.reset();
}

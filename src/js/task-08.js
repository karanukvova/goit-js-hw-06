const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Будь ласка, заповніть усі поля форми");
  } else {
    const loginData = {
      email,
      password,
    };

    console.log(loginData);
    form.reset();
  }
});

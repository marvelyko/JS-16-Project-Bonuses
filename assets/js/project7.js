const form = document.querySelector(".form");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validatedInputs();
});

const setError = (element, message) => {
  const input = element.parentElement;
  const error = input.querySelector(".error");
  error.textContent = message;
  input.classList.add("error");
  input.classList.remove("success");
};

const setSuccess = (element) => {
  const input = element.parentElement;
  const error = input.querySelector(".error");
  error.textContent = "";
  input.classList.add("success");
  input.classList.remove("error");
};

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatedInputs = () => {
  const nameValue = name1.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === "") {
    setError(name1, "Name is required");
  } else {
    setSuccess(name1);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!validEmail(emailValue)) {
    setError(email, "email is required");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "password is required");
  } else if (passwordValue.length < 10) {
    setError(password, "password is required and min length 10 ch.");
  } else {
    setSuccess(password);
  }
};

let WeakPassword = /[a-z]/;
let MediumPassword = /\d+/;
let StrongPassword = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

const input = document.getElementById("password");
const show = document.querySelector(".show");
const message = document.querySelector(".pass-message");

function run() {
  if (input.value !== "") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }

  if (input.value.length <= 4) {
    message.textContent = "Your Password is a weak";
    message.style.color = "red";
  } else if (
    (input.value.length > 4 &&
      input.value.length <= 8 &&
      (input.value.match(WeakPassword) || input.value.match(MediumPassword))) ||
    ((input.value.length > 8 &&
      input.value.length <= 12) &&
      input.value.match(WeakPassword) && input.value.match(!MediumPassword))
  ) {
    message.textContent = "Your Password is a medium";
    message.style.color = "orange";
  } else if (
    (input.value.length > 8 &&
      (input.value.match(StrongPassword) ||
        input.value.match(MediumPassword))) ||
    input.value.length > 12
  ) {
    message.textContent = "Your Password is a Strong";
    message.style.color = "green";
  }

  show.onclick = function () {
    if (input.type == "password") {
      input.type = "text";
      show.textContent = "HIDE";
    } else {
      input.type = "password";
      show.textContent = "SHOW";
    }
  };

  if (input.value === "") {
    message.textContent = "";
  }
}

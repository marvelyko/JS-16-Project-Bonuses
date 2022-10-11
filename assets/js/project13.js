var current_operand;
var previous_operand;
var current_operation;

// calculator button variables
const button_number = document.querySelectorAll("[data-number]");
const button_operation = document.querySelectorAll("[data-operation]");
const button_delete = document.querySelector("[data-delete]");
const button_clear = document.querySelector("[data-clear]");
const button_equal = document.querySelector("[data-equal]");

// calculator display variables
var previous_operand_text = document.querySelector("#calc-operation");
var current_operand_text = document.querySelector("#calc-typed");

// Adding Number when clicking on a button
function add_number(button_number_par) {
  button_number.forEach((button_number_par) => {
    button_number_par.addEventListener("click", () => {
      if (
        button_number_par.textContent === "." &&
        current_operand_text.textContent.includes(".")
      ) {
        return;
      }

      if (
        button_number_par.textContent !== "." &&
        current_operand_text.textContent === "0"
      ) {
        current_operand_text.textContent = "";
        current_operand_text.textContent += button_number_par.innerHTML;
        current_operand = current_operand_text.textContent;
      } else {
        current_operand_text.textContent += button_number_par.innerHTML;
        current_operand = current_operand_text.textContent;
      }

    });
  });
}
add_number();

// Operation buttons
button_operation.forEach((button_operation_par) => {
  button_operation_par.addEventListener("click", () => {
    if (
      previous_operand_text.textContent.includes("÷") ||
      previous_operand_text.textContent.includes("×") ||
      previous_operand_text.textContent.includes("+") ||
      previous_operand_text.textContent.includes("-") ||
      previous_operand_text.textContent.includes("%") ||
      previous_operand_text.textContent.includes("^")
    ) {
      let result;

      const prev = parseFloat(previous_operand);
      const current = parseFloat(current_operand);


      switch (current_operation) {
        case "+":
          result = current + prev;
          break;
        case "-":
          result = prev - current;
          break;
        case "×":
          result = current * prev;
          break;
        case "÷":
          result = prev / current;
          break;
        case "%":
          result = (prev * current) / 100;
          break;
        case "^":
          result = prev ** current;
          break;
        default:
          break;
      }
      current_operation = button_operation_par.textContent;
      previous_operand_text.textContent =
        result + button_operation_par.innerHTML;
      current_operand_text.textContent = "";
      previous_operand = result;
      current_operand = 0;
    } else {
      current_operation = button_operation_par.textContent;
      previous_operand_text.textContent =
        current_operand_text.textContent + button_operation_par.textContent;
      current_operand_text.textContent = "";
      previous_operand = previous_operand_text.textContent;
    }
  });
});

// Equal Button

button_equal.addEventListener('click', () => {
    if (
        previous_operand_text.textContent.includes("÷") ||
        previous_operand_text.textContent.includes("×") ||
        previous_operand_text.textContent.includes("+") ||
        previous_operand_text.textContent.includes("-") ||
        previous_operand_text.textContent.includes("%") ||
        previous_operand_text.textContent.includes("^")
      ) {
        let result;
  
        const prev = parseFloat(previous_operand);
        const current = parseFloat(current_operand);
  
  
        switch (current_operation) {
          case "+":
            result = current + prev;
            break;
          case "-":
            result = prev - current;
            break;
          case "×":
            result = current * prev;
            break;
          case "÷":
            result = prev / current;
            break;
          case "%":
            result = (prev * current) / 100;
            break;
          case "^":
            result = prev ** current;
            break;
          default:
            break;
        }
       current_operand_text.textContent = result;
       current_operand = 0;
       previous_operand_text.textContent = '';
       
      } else {
        return;
      }
})

// Delete button 

button_delete.addEventListener('click', () => {
    let text = current_operand_text.textContent;
    current_operand_text.textContent = text.slice(0,-1)
    current_operand = current_operand_text.textContent;

    if(current_operand_text.textContent === '') {
        current_operand_text.textContent = 0;
        current_operand = 0;
    }
})

//Clear button

button_clear.addEventListener('click', () => {
    current_operand = 0;
    current_operand_text.textContent = 0;
    previous_operand = 0;
    previous_operand_text.textContent = '';
})
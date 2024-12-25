let firstNumber = "";
let secondNumber = "";
let result = "";
let operator = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("На ноль делить нельзя");
    return null;
  }
  return a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}

function display(value) {
  document.getElementById("display").textContent = value;
}

function clearSelection() {
  const selectedButtons = document.querySelectorAll(".selected");
  selectedButtons.forEach((button) => {
    button.classList.remove("selected");
  });
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    const value = event.target.textContent;

    if (value >= "0" && value <= "9") {
      if (operator === "") {
        firstNumber += value;
        display(firstNumber);
      } else {
        secondNumber += value;
        display(secondNumber);
      }
    } else if (value === ".") {
      if (operator === "") {
        if (!firstNumber.includes(".")) {
          firstNumber += ".";
          display(firstNumber);
        }
      } else {
        if (!secondNumber.includes(".")) {
          secondNumber += ".";
          display(secondNumber);
        }
      }
    } else if (value === "C") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = "";
      display("0");
      clearSelection();
    } else if (value === "=") {
      if (firstNumber && secondNumber && operator) {
        result = operate(
          operator,
          parseFloat(firstNumber),
          parseFloat(secondNumber)
        );
        if (result !== null) {
          display(result);
          firstNumber = result.toString();
          secondNumber = "";
          operator = "";
        }
      }
    } else {
      if (firstNumber) {
        clearSelection();
        operator = value;
        event.target.classList.add("selected");
      }
    }
  });
});

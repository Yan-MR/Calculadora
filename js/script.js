const userInput =  document.querySelector("#userInput");
var expression = "";

document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key)) {
      press(event.key);
    } else if (event.key === "Backspace") {
      erase();
    }
  });
press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}
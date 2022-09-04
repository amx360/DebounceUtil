// func - function to be called with delay
// delay - delay in milliseconds, can be set as default or change explicitly
function debounce(func, delay = 750) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

var lastValue = '';

function userInputWithPreviousValueWatch() {
  var currValue = document.getElementById('field').value;

  if (lastValue !== currValue) {
    lastValue = currValue;
    document.getElementById('debounced').innerText = currValue;
    console.log(currValue);
  }
}

function userInput() {
  document.getElementById('debounced').innerText =
    document.getElementById('field').value;
  console.log(document.getElementById('field').value);
}

const debouncedUserInput = debounce(userInput, 1000);

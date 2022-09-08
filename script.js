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


function userInput() {
  document.getElementById('debounced').innerText =
    document.getElementById('field').value;
  console.log(document.getElementById('field').value);
}

const debouncedUserInput = debounce(userInput, 10000);



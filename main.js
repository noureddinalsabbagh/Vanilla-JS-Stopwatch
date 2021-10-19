// JS function that executes a function first when the page loads

window.onload = () => {
  // Variables to set them as values to the HTML elements

  let tens = 0;
  let seconds = 0;
  let minuets = 0;

  // Grabbing the HTML elements

  let manipulateMinuets = document.getElementById('minuets');
  let manipulateMSeconds = document.getElementById('seconds');
  let manipulateMTens = document.getElementById('tens');
  let startButton = document.getElementById('buttonStart');
  let stopButton = document.getElementById('buttonStop');
  let resetButton = document.getElementById('buttonReset');

  // giving the start button functionality with set interval which executes a function every 10th of a second

  startButton.onclick = function () {
    interval = setInterval(startTimer, 10);
  };

  // giving the stop button the reverse functionality when the set interval stops

  stopButton.onclick = function () {
    clearInterval(interval);
  };

  // Gicing the reset button functionality

  resetButton.onclick = function () {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minuets = '00';
    manipulateMSeconds.innerHTML = seconds;
    manipulateMTens.innerHTML = tens;
    manipulateMinuets.innerHTML = minuets;
  };

  // Start timer function

  function startTimer() {
    tens++;

    if (tens <= 9) {
      manipulateMTens.innerHTML = `0${tens}`;
    }

    if (tens > 9) {
      manipulateMTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      manipulateMSeconds.innerHTML = `0${seconds}`;
      tens = 0;
      manipulateMTens.innerHTML = `0${tens}`;
    }

    if (seconds > 9) {
      manipulateMSeconds.innerHTML = seconds;
    }

    if (seconds >= 59) {
      seconds = -1;
      manipulateMTens.innerHTML = `0${seconds}`;

      function incrMins() {
        minuets++;
        manipulateMinuets.innerHTML = `0${minuets}`;
      }

      setTimeout(incrMins, 1000);

      tens = 0;
      manipulateMTens.innerHTML = `0${tens}`;
    }

    if (minuets > 9) {
      manipulateMinuets.innerHTML = minuets;
    }
  }
};

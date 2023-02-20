const body = document.querySelector("body");
const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let timerId = null;

btnStop.setAttribute('disabled', true);

btnStart.addEventListener(`click`, () => {
      timerId = setInterval(() => {
          body.style.backgroundColor = getRandomHexColor()
      }, 1000);
      btnStart.disabled = true;
      btnStop.disabled = false;
  });

btnStop.addEventListener(`click`, () => {
      clearInterval(timerId);
      btnStart.disabled = false;
      btnStop.disabled = true;
  })


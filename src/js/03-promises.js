import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(`form`),
  delay: document.querySelector(`[name = delay]`),
  step: document.querySelector(`[name = step]`),
  amount: document.querySelector(`[name = amount]`),
};

refs.form.addEventListener(`submit`, handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.currentTarget;
  let firstDelay = Number(refs.delay.value);
  let amountCount = Number(refs.amount.value);
  let stepDelay = Number(refs.step.value);

  for (let i = 1; i < amountCount; i++) {
    createPromise(i, firstDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
firstDelay += stepDelay;
  };
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay});
        }
        reject({position, delay});
      }, delay)
    });
  }
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value, 10);
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then(result => {
      iziToast.success({ title: '✅ Success', message: result });
    })
    .catch(error => {
      iziToast.error({ title: '❌ Error', message: error });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}

//EASY ONE BY ME

// let count = 0;
// const value = document.querySelector('.value');
// const dec = document.querySelector('.dec');
// const res = document.querySelector('.res');
// const inc = document.querySelector('.inc');

// dec.addEventListener('click', function () {
//   count--;
//   value.textContent = count;
// });
// res.addEventListener('click', function () {
//   count = 0;
//   value.textContent = count;
// });
// inc.addEventListener('click', function () {
//   count++;
//   value.textContent = count;
// });

//INTERESTING AND HARD ONE

let count = 0;

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    }
    value.textContent = count;
  });
});
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('reset')) {
      count = 0;
    }
    value.textContent = count;
  });
});

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    }
    value.textContent = count;
  });
});

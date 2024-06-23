const modalBtn = document.querySelector('.modal-btn');
const model = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
  model.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function () {
  model.classList.remove('open-modal');
});

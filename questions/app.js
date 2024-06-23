const questions = document.querySelectorAll('.question');
console.log(questions);

questions.forEach(function (items) {
  const btn = items.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', function () {
    // console.log(question);

    items.classList.toggle('show-text');
    questions.forEach(function (item) {
      if (item !== items) {
        item.classList.remove('show-text');
      }
    });
  });
});

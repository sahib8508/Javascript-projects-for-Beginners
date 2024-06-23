//SIMPLE COLOR CHANGE

const colors = ['Red', 'Green', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('button');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const random = getRandom();
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});
const getRandom = () => {
  return Math.floor(Math.random() * 3);
};

//HEX COLOR CHANGE

// const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F'];
// const btn = document.getElementById('button');
// const color = document.querySelector('.color');

// btn.addEventListener('click', function () {
//   let hexColor = '#';
//   for (let i = 0; i < 6; i++) {
//     hexColor = hexColor + hex[getRandom()];
//   }

//   document.body.style.backgroundColor = hexColor;
//   color.textContent = hexColor;
// });
// const getRandom = () => {
//   return Math.floor(Math.random() * hex.length);
// };

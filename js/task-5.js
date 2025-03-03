function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const output = document.querySelector('span.color');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  output.textContent = newColor;
});

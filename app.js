const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");

document.addEventListener("DOMContentLoaded", function () {
  // Function for random color random color
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // Function to change the background color of the color box
  function changeColor() {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  }
  window.addEventListener("DOMContentLoaded", changeColor);

  changeColorBtn.addEventListener("click", changeColor);
});

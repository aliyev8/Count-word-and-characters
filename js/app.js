const inputCount = document.querySelector(".enter_count");
const wordEnter = document.querySelector(".wordCount");
const letterEnter = document.querySelector(".letterCount");

const count = function () {
  const letter = inputCount.value;
  const letterLenght = letter.length;
  const words = letter.split(/[\n\r\s]+/g).filter(function (word) {
    return word.length > 0;
  });
  wordEnter.innerHTML = words.length;
  letterEnter.innerHTML = letterLenght;
};
count();
window.addEventListener(
  "input",
  function (event) {
    if (event.target.matches(".enter_count")) {
      count();
    }
  },
  false
);

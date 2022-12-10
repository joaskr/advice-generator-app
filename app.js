const adviceNumber = document.querySelector(".number");
const adviceText = document.querySelector(".advice-text");
const getAdvicesButton = document.querySelector(".button");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.innerHTML = data.slip.id;
      adviceText.innerHTML = data.slip.advice;
    })
    .catch((err) => {
      console.log(err);
      adviceNumber.innerHTML = "0";
      adviceText.innerHTML = "Something went wrong. Try again later.";
    });
};

getAdvicesButton.addEventListener("click", getAdvice);

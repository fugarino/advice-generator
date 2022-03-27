// Selectors
const adviceNumberElement = document.querySelector(".advice-number");
const adviceTextElement = document.querySelector(".advice-text");
const btn = document.querySelector(".advice-button");

// Functions
const handleClick = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => handleData(data));
};

const handleData = (data) => {
  const adviceNumber = data.slip.id;
  const adviceText = data.slip.advice;
  // Displaying Content
  adviceNumberElement.textContent = `ADVICE #${adviceNumber}`;
  adviceTextElement.textContent = `"${adviceText}"`;
};

// EventListeners
btn.addEventListener("click", handleClick);

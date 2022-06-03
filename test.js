let total = "";
let questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
let answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

total = "";
for (let i = 0; i < questions.length; i++) {
  total += `<li>${answers[i]}</li><li><span class='text-xs'>${questions[i]}<span></li>`;
}

document.querySelector("#listOfAnswers>ul").innerHTML = total;

let toggleList = () => {
  document.querySelector("#listOfAnswers").classList.toggle("hidden");
  document.querySelector("#listOfAnswersToggle").classList.toggle("rounded-md");
  document.querySelector("#upArrow").classList.toggle("hidden");
  document.querySelector("#downArrow").classList.toggle("hidden");
};

document
  .querySelector("#listOfAnswersToggle")
  .addEventListener("click", toggleList);

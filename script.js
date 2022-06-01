let question = document.querySelector(".sc-wRHdD.eELOCP>div>div>div>span");
question.style.background = "blue";
let questions = [];
let answers = [];

const addBtn = document.createElement("button");
addBtn.style.position = "absolute";
addBtn.style.zIndex = "1000";
addBtn.style.backgroundColor = "#d5dbe6";
addBtn.innerHTML = "Update";
addBtn.style.left = "0";
addBtn.style.top = "0";
addBtn.id = "Add";
document.querySelector("body").appendChild(addBtn);

const getBtn = document.createElement("button");
getBtn.style.position = "absolute";
getBtn.style.zIndex = "1000";
getBtn.style.backgroundColor = "#d5dbe6";
getBtn.innerHTML = "Get";
getBtn.style.left = "0";
getBtn.style.top = "1.5rem";
getBtn.id = "Add";
document.querySelector("body").appendChild(getBtn);

let option1 = document.querySelector(".sc-jEdsij.bUiTwU>div>div>div>div>span");
let option2 = document.querySelector(".sc-jEdsij.hzSmEE>div>div>div>div>span");
let option3 = document.querySelector(".sc-jEdsij.jELlPp>div>div>div>div>span");
let option4 = document.querySelector(".sc-jEdsij.dgxTea>div>div>div>div>span");

let resetChoices = () => {
  option1.style.background = "red";
  option2.style.background = "orange";
  option3.style.background = "green";
  option4.style.background = "cyan";
};

let add = () => {
  question = document.querySelector(".sc-wRHdD.eELOCP>div>div>div>span");
  option1 = document.querySelector(".sc-jEdsij.bUiTwU>div>div>div>div>span");
  option2 = document.querySelector(".sc-jEdsij.hzSmEE>div>div>div>div>span");
  option3 = document.querySelector(".sc-jEdsij.jELlPp>div>div>div>div>span");
  option4 = document.querySelector(".sc-jEdsij.dgxTea>div>div>div>div>span");
  inputBox = document.querySelector(".sc-cGDfzg.hGKJuA");

  let newQuestion = prompt("Add Question");
  if (newQuestion == "current") {
    newQuestion = question.innerHTML;
  }
  let newAnswer = prompt("Add Answer");
  if (newAnswer == "current 1") {
    newAnswer = option1.innerHTML;
  } else if (newAnswer == "current 2") {
    newAnswer = option2.innerHTML;
  } else if (newAnswer == "current 3") {
    newAnswer = option3.innerHTML;
  } else if (newAnswer == "current 4") {
    newAnswer = option4.innerHTML;
  } else if (newAnswer == "current") {
    newAnswer = inputBox.getAttribute("value");
  }

  if (questions.includes(newQuestion)) {
    alert("Already added or duplicate question");
    return;
  }
  questions.push(newQuestion);
  answers.push(newAnswer);
  alert(`Successfully added question: "${newQuestion}".\n Successfully added answer :"${newAnswer}.`);
};

let currentQuestion;

let textSample = c => {
  question = document.querySelector(".sc-wRHdD.eELOCP>div>div>div>span");
  inputBox = document.querySelector(".sc-cGDfzg.hGKJuA");
  let alertAnswer1 = prompt("copy or set");
  if (alertAnswer1 == "set") {
    inputBox.value = answers[currentQuestion];
    alert("Enter Space");
    return;
  }
  alert(answers[currentQuestion]);
};

let get = () => {
  question = document.querySelector(".sc-wRHdD.eELOCP>div>div>div>span");
  option1 = document.querySelector(".sc-jEdsij.bUiTwU>div>div>div>div>span");
  option2 = document.querySelector(".sc-jEdsij.hzSmEE>div>div>div>div>span");
  option3 = document.querySelector(".sc-jEdsij.jELlPp>div>div>div>div>span");
  option4 = document.querySelector(".sc-jEdsij.dgxTea>div>div>div>div>span");

  if (!questions.includes(question.innerHTML)) {
    alert("Not in Database.");
    return;
  }
  let filter = element => element == question.innerHTML;
  currentQuestion = questions.findIndex(filter);
  console.log(question.innerHTML);
  //alert(answers[currentQuestion]);

  if (!option1 && !option2 && !option3 && !option4) {
    textSample();
    return;
  }

  if (option1.innerHTML == answers[currentQuestion]) {
    option1.style.background = "black";
    option1.style.padding = "1rem";
    //alert("1");
  } else if (option2.innerHTML == answers[currentQuestion]) {
    option2.style.background = "black";
    option2.style.padding = "1rem";
    //alert("2");
  } else if (option3.innerHTML == answers[currentQuestion]) {
    option3.style.background = "black";
    option3.style.padding = "1rem";
    //alert("3");
  } else if (option4.innerHTML == answers[currentQuestion]) {
    option4.style.background = "black";
    option4.style.padding = "1rem";
    //alert("4");
  } else {
    alert("Error Not Found");
  }
};

addBtn.addEventListener("click", add);
getBtn.addEventListener("click", get);
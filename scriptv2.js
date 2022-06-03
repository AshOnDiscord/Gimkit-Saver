// Initialize Variables
let currentQuestion;
let currentAnswer;
let questions = [""];
let answers = [""];
let question;
let choice1;
let choice2;
let choice3;
let choice4;
let inputBox;
let filter = (element) => element == question.innerText;

// Add custom css file so I don't need to use inline css
let scriptCSS = document.createElement("link");
scriptCSS.setAttribute("rel", "stylesheet");
scriptCSS.setAttribute(
  "href",
  "https://raw.githubusercontent.com/joshuac/gimkit/master/gimkit.css"
);

let ui = document.createElement("div");
document.body.appendChild(ui);
ui.classList.add("text-slate-100");
ui.innerHTML =
  '<div class="bg-slate-800 p-3 z-[1000] rounded-md m-4 absolute top-0 left-0 shadow-md shadow-slate-900/50"><h1 class="font-semibold text-xl mb-2">Gimkit Utility</h1><div class="grid grid-cols-2 gap-2"><button class="scriptBtn">Add</button><button class="scriptBtn">Get</button><div class="flex flex-col col-span-2 mt-2"><button id="listOfAnswersToggle" class="flex justify-between px-2 py-1 bg-slate-700/50 m-0 rounded-t-md items-center"><h1>Show List</h1><span id="upArrow" class="hidden"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg></span><span id="downArrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></span></button><div class="bg-slate-700 rounded-b-md border-t-[1px] py-1" id="listOfAnswers"><ul class="list-disc list-inside ml-2 border-slate-100"><li>Question</li><li>Answer</li></ul></div></div></div></div><button class="z-[1000] p-1 absolute right-0 bottom-0 bg-slate-800 m-4 rounded-md flex justify-center items-center shadow-md shadow-slate-900/25">Hide</button>';

let update = () => {
  currentQuestion = document.querySelector(".sc-bjPkoM.FAjCU span") || "error";
  currentAnswer = document.querySelector(".sc-frudsx.faXgRI span") || "error";

  if (currentQuestion == "error" || currentAnswer == "error") {
    alert(
      'You are not on the "View Correct Answer" page or Gimkit might have updated'
    );
    return;
  }

  currentQuestion.style.background = "green";
  currentAnswer.style.background = "green";

  if (questions.includes(currentQuestion.innerHTML)) {
    alert("Already added or duplicate question");
    currentQuestion.style.background = "transparent";
    currentAnswer.style.background = "transparent";
    return;
  }

  questions.push(currentQuestion.innerText);
  answers.push(currentAnswer.innerText);
  currentQuestion.style.background = "transparent";
  currentAnswer.style.background = "transparent";
};

let get = () => {
  question = null;
  question = document.querySelector(".sc-bjPkoM.FAjCU span") || "error";

  if (question == "error") {
    alert("You are not on the questions page or Gimkit has updated");
  }

  choice1 =
    document.querySelector(".sc-jEdsij.bUiTwU>div>div>div>div>span") ||
    "Non-exsistent";
  choice2 =
    document.querySelector(".sc-jEdsij.hzSmEE>div>div>div>div>span") ||
    "Non-exsistent";
  choice3 =
    document.querySelector(".sc-jEdsij.jELlPp>div>div>div>div>span") ||
    "Non-exsistent";
  choice4 =
    document.querySelector(".sc-jEdsij.dgxTea>div>div>div>div>span") ||
    "Non-exsistent";

  if (
    choice1 == "Non-exsistent" ||
    choice2 == "Non-exsistent" ||
    choice3 == "Non-exsistent" ||
    choice4 == "Non-exsistent"
  ) {
    inputBox = document.querySelector(".sc-cGDfzg.hGKJuA") || "Non-exsistent";
    if (inputBox == "Non-exsistent") {
      alert("You are not on the questions page or Gimkit has updated");
      return;
    }
    textBoxGet(inputBox);
    return;
  }

  if (!questions.includes(question.innerText)) {
    alert("Not added yet");
    return;
  }

  let answerIndex = questions.findIndex(filter);
  let correctChoice;

  if (choice1.innerText == answers[answerIndex]) {
    correctChoice = choice1;
    //alert("1");
  } else if (choice2.innerText == answers[answerIndex]) {
    correctChoice = choice2;
    //alert("2");
  } else if (choice3.innerText == answers[answerIndex]) {
    correctChoice = choice3;
    //alert("3");
  } else if (choice4.innerText == answers[answerIndex]) {
    correctChoice = choice4;
    //alert("4");
  } else {
    alert("Error Not Found");
    return;
  }
  correctChoice.style.background = "black";
  correctChoice.style.padding = "1rem";
};

let textBoxGet = (inputBox) => {
  let answerIndex = questions.findIndex(filter);
  let alertAnswer1 = prompt("copy or set");
  if (alertAnswer1 == "copy") {
    alert(answers[answerIndex]);
    return;
  }
  inputBox.value = answers[answerIndex];
};

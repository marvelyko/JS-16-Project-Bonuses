const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const questionForm = document.getElementById("question");
const answersForm = document.getElementById("answer-buttons");
const body = document.body;
let current_number;

// QUESTIONS' ARRAY
const questions = [
  {
    question: "What are you learning right now?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "HTML5", correct: false },
      { text: "CSS3", correct: false },
    ],
  },
  {
    question: "Do you like winter",
    answers: [
      { text: "YES", correct: true },
      { text: "NO", correct: false },
    ],
  },
  {
    question: "Do you like JS",
    answers: [
      { text: "indeed", correct: true },
      { text: "NO", correct: false },
      { text: "KINDA", correct: false },
      { text: "NOT REALLY", correct: false },
    ],
  },
  {
    question: "DO you like MAC",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Do you use Bootstrap 5",
    answers: [
      { text: "yes for bootstrap", correct: true },
      { text: "no for bootstrap", correct: false },
    ],
  },
];

start_quiz = () => {
  startBtn.addEventListener("click", () => {
    current_number = 0;
    startBtn.classList.add("hidden");
    next_question();
    // create_question(questions[current_number]);
  });
};

start_quiz();

next_question = () => {
  reset_state();
  create_question(questions[current_number]);
};



// Create question

create_question = (question_par) => {
  questionForm.textContent = question_par.question;
  question_par.answers.forEach((answer_par) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    answersForm.appendChild(button);
    button.innerHTML = answer_par.text;
    if (answer_par.correct) {
      button.dataset.correct = answer_par.correct;
    }
    button.addEventListener("click", select_answer);
  });
};

// Select answer

select_answer = (e) => {
  const selected_answer = e.target;
  const correct = selected_answer.dataset.correct;
  changeBackground(document.body, correct);

  if (questions.length - 1 > current_number) {
    nextBtn.classList.remove("hidden");
  } else {
    questionForm.innerHTML = "";
    answersForm.innerHTML = "";
    startBtn.innerHTML = "Restart";
    startBtn.classList.remove("hidden");
  }
};

//Change Background accroding answer

changeBackground = (e, a) => {
  clearElement(e);
  if (a) {
    e.classList.add("correct");
  } else {
    e.classList.add("wrong");
  }
};

clearElement = (e) => {
  e.classList.remove("correct");
  e.classList.remove("wrong");
};

nextBtn.addEventListener('click', () => {
    current_number++;
    reset_state();
    create_question(questions[current_number]);
})

//Reset State
reset_state = () => {
      questionForm.innerHTML = "";
      answersForm.innerHTML = "";
      body.classList.remove('correct');
      body.classList.remove('wrong');
        nextBtn.classList.add('hidden');
  };
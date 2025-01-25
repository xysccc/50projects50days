const doms = {
  submit: document.getElementById("submit"),
  qusDom: document.querySelector(".quiz-header"),
  question: document.querySelector("h2"),
  answers: document.querySelector("ul"),
};
let idx = 0;
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const userAns = new Map();
function updateQuiz(data = quizData) {
  const currentQData = data[idx];
  doms.question.textContent = currentQData.question;
  doms.answers.innerHTML = ["a", "b", "c", "d"]
    .map(
      (v) => ` <li>
            <input type="radio" name="answer" id=${v} class="answer" />
            <label for=${v} id="${v}_text">${currentQData[v]}</label>
          </li>`
    )
    .join("");
}
function updateResult() {
  const correctQuantity = quizData.reduce(
    (pre, cur, idx) => (cur.correct === userAns.get(idx) && pre++, pre),
    0
  );
  doms.question.textContent = `You answered ${correctQuantity}/${quizData.length} questions correctly`;
  doms.answers.innerHTML = "";
  doms.submit.textContent = `Reload`;
}
function submit() {
  if (doms.submit.textContent === `Reload`) {
    reload();
    return;
  }
  const ipts = document.querySelectorAll(".quiz-header input");
  const currentQ = [...ipts].find((v) => v.checked)?.id;
  if (!currentQ) return;
  userAns.set(idx, currentQ);
  idx++;
  if (idx <= quizData.length - 1) {
    updateQuiz();
  } else {
    updateResult();
  }
}
function reload() {
  idx = 0;
  updateQuiz();
  doms.submit.textContent = `Submit`;
}
doms.submit.addEventListener("click", submit);
updateQuiz();

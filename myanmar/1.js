

const quizData = [
  {
    question: "၁။ အဖိုးအိုက လက်ငင်းပင် ပတ္တမြားသီးသီးလေပြီဟု _ _ _ _ လေသည်။",
    //document.getElementById("media").innerHTML='<img src="media/pic.jpg">' ,
    a: "ကြူးယင့်",
    b: "ကြူးရင့်",
    c: "ကျူးယင့်",
    d: "ကျူးရင့်",
    correct: "d",
  },
  {
    question: "၂။ မနက်ဖြန်မနက်တွင် ဖေဖေ ပြန်လာမည်ဟု ကျွန်တော် ______ နေပါသည်။",
    a: "မြှော်လင့်",
    b: "မျှော်လင့်",
    c: "မြော်လင့်",
    d: "မျော်လင့်",
    correct: "b",
  },
  {
    question: "၃။ ညီမလေးသည် ဖေဖေဝယ်လာသော မုန့်များကို ____ စွာစားနေပါသည်။",
    a: "မြိန်ရှက်",
    b: "မြိန်ယှက်",
    c: "မြိန်လျက်",
    d: "မိန်ရှက်",
    correct: "a",
  },
  {
    question: "၄။ ____ သည်အဖိုးတန်သည်။",
    a: "ပတ္တများ",
    b: "ပတ္တမြား",
    c: "ပတမြား",
    d: "အားလုံးမှားသည်",
    correct: "b",
  },
];


const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        ` // location.reload() won't work in CodePen for security reasons;
    }
  }
});

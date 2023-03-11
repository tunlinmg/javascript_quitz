

const quizData = [
  {
    question: "လည်ချောင်းနာ၊ သွားနာပါက ဆားရည်ဖြင့် ____ ပေးလျှင်သက်သာသည်။",
    //document.getElementById("media").innerHTML='<img src="media/pic.jpg">' ,
    a: "ပလုတ်ကျင်း",
    b: "ပလုပ်ကျင်း",
    c: "ပလုတ်ကြင်း",
    d: "ပလုပ်ကြင်း",
    correct: "a",
  },
  {
    question: "၂။ ရှေးအခါက ပဲခူးနယ်က ဆား___ထွက်ခဲ့ဖူးသည်။",
    a: "အမြောက်အများ",
    b: "အမြောက်အမြား",
    c: "မြော်လင့်",
    d: "မျော်လင့်",
    correct: "b",
  },
  {
    question: "၃။ အသားငါးများ _____ ဘဲ ကြာရှည်ခံအောင် ဆားနယ်၍ ငါးပိ၊ ငါးခြောက် အသားခြောက်စသည်တို့ပြုလုပ်ကြသည်။",
    a: "မပုဒ်မသိုး",
    b: "မပုတ်မသိုး",
    c: "မပုပ်မသိုး",
    d: "မပုက်မသိုး",
    correct: "c",
  }
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

var questionsArr = [
  {
    question: 'Rome is the capital of Italy',
    answer: true
  },
  {
    question: 'Paris is the capital of Spain',
    answer: false
  },
  {
    question: 'Germany is in southern Europe',
    answer: false
  },
  {
    question: 'The Alps are at the border between France and Spain',
    answer: false
  },
  {
    question: 'Sweden is the European country with the most islands',
    answer: true
  }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < questionsArr.length; i++) {
    let userAnswer = confirm(questionsArr[i].question);
    if (userAnswer === questionsArr[i].answer) {
      score++;
    }
  }

  let percentageScore = (score / questionsArr.length) * 100;
  window.alert(`Your score is ${percentageScore.toFixed()}%`);
}



runQuiz();

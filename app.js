import { data } from './data/data.js';
import { Question } from './models/Question.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/UI.js';

/**
 *
 * @param {Quiz} quiz Quiz object
 * @param {UI} ui UI object
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.printScore(quiz.score, quiz.questions.length,  () => {
      main();
    });
  } else {
    ui.printTittle(quiz.getQuestionIndex().question);
    ui.printChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.selectChoice(currentChoice);
      renderPage(quiz, ui);
    });
    ui.printNumberQuestion(quiz.questionIndex + 1, quiz.questions.length);
  }
};

function main() {
  let questions = data.map(
    (question) =>
      new Question(question.question, question.choices, question.answer)
  );
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();

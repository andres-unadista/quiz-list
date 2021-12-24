//ts-check
import { Question } from "./Question.js";

export class Quiz{
  questionIndex = 0;
  score = 0;

  /**
   * 
   * @param {Question[]} questions 
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   * 
   * @returns {Question} the question was found
   */
  getQuestionIndex(){
    return this.questions[this.questionIndex];
  }

  /**
   * 
   * @returns {boolean} validate end of array
   */
  isEnded(){
    return this.questions.length === this.questionIndex;
  }

  /**
   * @param {string} answer choice of question
   */
  selectChoice(answer){
    if (this.getQuestionIndex().validateAnswer(answer)) {
      this.score++
    }
    this.questionIndex++;
  }

}
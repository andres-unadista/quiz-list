export class Question {
  /**
   * 
   * @param {string} question this is the question
   * @param {string[]} choices this are choices of the question
   * @param {string} answer this is the answer of the question
   */
  constructor(question, choices, answer) {
    this.question = question
    this.choices = choices
    this.answer = answer
  }

  /**
   * 
   * @param {string} choice 
   * @returns {boolean}
   */
  validateAnswer(choice) {
    return this.answer == choice
  }
}

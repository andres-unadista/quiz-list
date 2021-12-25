export class UI{
  /**
   * 
   * @param {string} text text of question
   */
  printTittle(text){
    let $title = document.querySelector('.card-tiltle');
    $title.textContent = text
  }

  /**
   * 
   * @param {String[]} choices 
   */
  printChoices(choices, callback){
    let $list_container = document.querySelector('.card-list');
    $list_container.innerHTML = ''
    
    for(let index = 0; index < choices.length; index++){
      let $li = document.createElement('li');
      let $button = document.createElement('button');
      $button.innerText = choices[index]
      $button.addEventListener('click', () => callback(choices[index]))
      $li.append($button);
      $list_container.append($li)
    }
  }
  
  /**
   * 
   * @param {number} score Points of Quiz
   * @param {number} total Total questions of Quiz
   */
  printScore(score, total, callback){
    let $title = document.querySelector('.card-tiltle');
    let $list_container = document.querySelector('.card-list');
    let $list_footer = document.querySelector('.card-footer');
    
    $list_container.innerHTML = ''
    $list_footer.innerText = ''

    const $h2 = document.createElement('h2')
    $h2.className = 'title-answer'
    const $button = document.createElement('button')
    $title.innerText = 'Resultado'
    if (score === total) {
      const $titleMessage = document.createElement('h2')
      $h2.innerText = `¡Felicitaciones!`
      $titleMessage.innerHTML = `Has respondido todas las preguntas (${score} de ${score})! 🎉✨`
      $list_container.append($titleMessage)
    } else {
      $h2.innerText = `Puntos obtenidos: ${score}`
    }
    $button.innerText = 'Reiniciar'
    
    $button.addEventListener('click', () => callback())

    $list_container.append($h2)
    $list_container.append($button)
  }
  
  /**
   * 
   * @param {number} index
   * @param {number} total
   */
  printNumberQuestion(index, total){
    let $list_footer = document.querySelector('.card-footer');
    $list_footer.innerHTML = `<h2>Pregunta ${index} de ${total}</h2>`
  }
}
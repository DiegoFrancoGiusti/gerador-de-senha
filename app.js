const form = document.querySelector('.c-form')
const inputRange = document.querySelector('#passwordLength')
const passLengthContent = document.querySelector('.passLength')
const passwordMessage = document.createElement('p')
const btnCopy = document.querySelector('.c-button--copy')

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = `.+-[]*~_@#:?`
let passwordCaracters = ''
let passwordLength = 18
let password = ''

inputRange.addEventListener('input',event => {
  passwordLength = Number(event.target.value)

  passLengthContent.textContent = passwordLength
  
  if(passwordLength <= 10){
    passwordMessage.textContent = 'Senha fraca'
    passwordMessage.style.color = '#e00707'
    inputRange.insertAdjacentElement('afterend',passwordMessage)

    return
  } 
  
  if(passwordLength > 10 && passwordLength <= 18){
    passwordMessage.textContent = 'Senha intermediária'
    passwordMessage.style.color = '#ffa500'
    inputRange.insertAdjacentElement('afterend',passwordMessage)

    return
  }

  if(passwordLength > 18){
    passwordMessage.textContent = 'Senha forte'
    passwordMessage.style.color = '#008000'
    inputRange.insertAdjacentElement('afterend',passwordMessage)

    return
  }
})



form.addEventListener('submit',event => {
  event.preventDefault()

  if(event.target.inputCheckLowerCase.checked){
    passwordCaracters += lowerLetters
  }

  if(event.target.inputCheckUpperCase.checked){
    passwordCaracters += upperLetters
  }

  if(event.target.inputCheckNumber.checked){
    passwordCaracters += numbers
  }

  if(event.target.inputCheckSymbol.checked){
    passwordCaracters += symbols
  }

  if(passwordCaracters.length !== 0){
    for(let i = 1;i <= passwordLength;i++){
      const x = passwordCaracters.length -1
      const index = Math.round(Math.random() * x)

      password += passwordCaracters[index]
    }
  }

  if(passwordCaracters.length === 0){
    passwordMessage.textContent = 'Selecione uma das opções'
    form.insertAdjacentElement('beforebegin',passwordMessage)

    setTimeout(() => {
      passwordMessage.textContent = ''
    },1800)
  }

  event.target.generatedPass.placeholder = password
  password = ''
  passwordCaracters = ''
})

btnCopy.addEventListener('click', event =>{
  event.preventDefault()
  if(form.generatedPass.placeholder !== ''){
    navigator.clipboard.writeText(form.generatedPass.placeholder)
    passwordMessage.textContent = 'Senha copiada :)'
    form.insertAdjacentElement('afterend',passwordMessage)

    setTimeout(() => {
      passwordMessage.textContent = ''
    },1400)
  }
})

const form = document.querySelector('.c-form')
const inputRange = document.querySelector('#passwordLength')
const passLengthContent = document.querySelector('.passLength')
const btnCopy = document.querySelector('.c-button--copy')
const passwordMessage = document.createElement('p')
const caracters = [
  'abcdefghijklmnopqrstuvwxyz',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  '0123456789',
  `.+-[]*~_@#:?`
]
let passwordCaracters = ''
let passwordLength = 18
let password = ''

const showPassworLengthMessage = (message,color) => {
    passwordMessage.textContent = message
    passwordMessage.style.color = color
    inputRange.insertAdjacentElement('afterend',passwordMessage)
}

const passwordLengthValidation = passwordLength => {
  if(passwordLength <= 10){
    showPassworLengthMessage('Senha fraca', '#e00707')
  } 
  
  if(passwordLength > 10 && passwordLength <= 18){
    showPassworLengthMessage('Senha intermediária','#ffa500')
  }

  if(passwordLength > 18){
    showPassworLengthMessage('Senha forte','#008000')
  }
}

const getPasswordCaracters = () => {
  let isInputChecked = null

  for(let i = 1;i <= 4;i++){
    isInputChecked = form[`inputCheck${i}`].checked

    if(isInputChecked){
      passwordCaracters += caracters[form[`inputCheck${i}`].value]
    }
  }
}

const generatePassword = () => {
  if(passwordCaracters.length !== 0){
    for(let i = 1;i <= passwordLength;i++){
      const passwordCaractersLength = passwordCaracters.length -1
      const index = Math.round(Math.random() * passwordCaractersLength)

      password += passwordCaracters[index]
    }
  }
}

const clearMessageContent = () => {
  setTimeout(() => {
    passwordMessage.textContent = ''
  },1800)
}

const insertMessage = (menssage,position) => {
  passwordMessage.textContent = menssage
  passwordMessage.style.color = ''
  form.insertAdjacentElement(position,passwordMessage)
  
  clearMessageContent()
}

const showSelectOptionsMenssage = () => {
  if(passwordCaracters.length === 0){
    insertMessage('Selecione uma das opções','beforebegin')
  }
}

const showCopyPasswordMessage = () => {
  if(form.generatedPass.placeholder !== ''){
    navigator.clipboard.writeText(form.generatedPass.placeholder)
    insertMessage('Senha copiada :)','afterend')
  }
}

const showPassword = () => {
  form.generatedPass.placeholder = password

  password = ''
  passwordCaracters = ''
}

inputRange.addEventListener('input', event => {
  passwordLength = Number(event.target.value)
  passLengthContent.textContent = passwordLength

  passwordLengthValidation(passwordLength)
})

form.addEventListener('submit',event => {
  event.preventDefault()
  getPasswordCaracters()
  generatePassword()
  showSelectOptionsMenssage()
  showPassword()
})

btnCopy.addEventListener('click', event =>{
  event.preventDefault()
  showCopyPasswordMessage()
})
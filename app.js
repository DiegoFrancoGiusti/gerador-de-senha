const form = document.querySelector('.c-form')
const inputRange = document.querySelector('#passwordLength')
const passLengthContent = document.querySelector('.passLength')
const list = document.querySelector('.c-form__checkList')
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const simbols = `!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`
//const passCaracters = []

form.addEventListener('submit',event => {
  event.preventDefault()
   console.log(event.target.inputupperCase.value)
})

inputRange.addEventListener('input',event => {
  passLengthContent.textContent = event.target.value
 
})

list.addEventListener('click', event => {
  
  
})

(function () {
  const calculate = document.querySelector('.form__submit-button');
  

  const gender = document.querySelector('.gender');
  const parameters = document.querySelector('.inputs-group');
  const activity = document.querySelector('.radios-group');


  const personalInfo = {
    isMale: true,
    age:0,
    height:0,
    weight:0,
    activity:0
 }
 
  const physactivity = ['min','low','medium', 'high', 'max'];

  const inputAge = document.getElementById("age");
  const inputHeight = document.getElementById("height");
  const inputWeight = document.getElementById("weight");
 


  inputAge.addEventListener('input', () => {
    personalInfo.age = inputAge.value
   if( personalInfo.age > 0 && personalInfo.height > 0 && personalInfo.weight > 0 ) {calculate.disabled = false}
    else {calculate.disabled = true}
  }) ;
  inputHeight.addEventListener('input', () => {
    personalInfo.height = inputHeight.value
   if( personalInfo.age > 0 && personalInfo.height > 0 && personalInfo.weight > 0 ) {calculate.disabled = false}
    else {calculate.disabled = true}
  }) ;
  inputWeight.addEventListener('input', () => {
    personalInfo.weight = inputWeight.value
   if( personalInfo.age > 0 && personalInfo.height > 0 && personalInfo.weight > 0 ) {calculate.disabled = false}
    else {calculate.disabled = true}
  }) 
})()
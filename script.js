(function () {
  const calculate = document.querySelector('.form__submit-button');
  const reset = document.querySelector('.form__reset-button');
  

  const gender = document.querySelector('.gender');
  const parameters = document.querySelector('.inputs-group');
  const activity = document.querySelector('.radios-group');
  const module = document.querySelector('.counter__result');
  

  const personalInfo = {
    isMale: true,
    age:0,
    height:0,
    weight:0,
    activity:1.2
 }
 
 

  const inputAge = document.getElementById("age");
  const inputHeight = document.getElementById("height");
  const inputWeight = document.getElementById("weight");

  const inputFemale = document.getElementById("gender-female");
  const inputMale = document.getElementById("gender-male");

  const inputMin = document.getElementById("activity-minimal");
  const inputLow = document.getElementById("activity-low");
  const inputMedium = document.getElementById("activity-medium");
  const inputHigh = document.getElementById("activity-high");
  const inputMax = document.getElementById("activity-maximal");
  
  const calNorm= document.getElementById("calories-norm");
  const weightGain = document.getElementById("calories-maximal");
  const weightLoss = document.getElementById("calories-minimal");
 
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
  }) ;

  inputMale.addEventListener ('click', () => {
    personalInfo.isMale = true
  });
 
  inputFemale.addEventListener ('click', () => {
    personalInfo.isMale = false;
    /*inputFemale.checked = true;
    inputMale.checked = false*/

  });

  inputMin.addEventListener ('click', () => {
    personalInfo.activity = 1.2;
   
  });

  inputLow.addEventListener ('click', () => {
    personalInfo.activity = 1.375;
   
  });
  inputMedium.addEventListener ('click', () => {
    personalInfo.activity = 1.55;
   
  });

  inputHigh.addEventListener ('click', () => {
    personalInfo.activity = 1.725;
   
  });

  inputMax.addEventListener ('click', () => {
    personalInfo.activity = 1.9;
   
  });


  calculate.addEventListener('click', (evt) => {
    evt.preventDefault()
    module.classList.remove("counter__result--hidden")
    const femaleCalTotal = (10 * personalInfo.weight) + (6.25 * personalInfo.height) - (5 * personalInfo.age) - 161;
    const maleCalTotal = (10 *  personalInfo.weight) + (6.25 * personalInfo.height) - (5 * personalInfo.age) + 5;
    calNorm.innerHTML = Math.floor(personalInfo.activity * (personalInfo.isMale ? maleCalTotal : femaleCalTotal))
    weightGain.innerHTML = Math.floor((personalInfo.activity * (personalInfo.isMale ? maleCalTotal : femaleCalTotal)) * 0.15 + (personalInfo.activity * (personalInfo.isMale ? maleCalTotal : femaleCalTotal)));
    weightLoss.innerHTML = Math.floor((personalInfo.activity * (personalInfo.isMale ? maleCalTotal : femaleCalTotal)) - (personalInfo.activity * (personalInfo.isMale ? maleCalTotal : femaleCalTotal) * 0.15));

     });

  



     inputAge.addEventListener('input', () => {
      personalInfo.age = inputAge.value
     if( personalInfo.age > 0 || personalInfo.height > 0 || personalInfo.weight > 0 ) {reset.disabled = false}
      else {reset.disabled = true}
    }) ;

    inputHeight.addEventListener('input', () => {
      personalInfo.height = inputHeight.value
     if( personalInfo.age > 0 || personalInfo.height > 0 || personalInfo.weight > 0 ) {reset.disabled = false}
      else {reset.disabled = true}
    }) ;

    inputWeight.addEventListener('input', () => {
      personalInfo.weight = inputWeight.value
     if( personalInfo.age > 0 || personalInfo.height > 0 || personalInfo.weight > 0 ) {reset.disabled = false}
      else {reset.disabled = true}
    }) ;
    
    reset.addEventListener('click', () => {
     
      module.classList.add("counter__result--hidden")
     
      personalInfo.isMale = true;
      personalInfo.age = 0;
      personalInfo.height = 0;
      personalInfo.weight = 0;
      personalInfo.activity = 0
      console.log(personalInfo)
       });
  
   


})()


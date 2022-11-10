let calculate = document.querySelector("#submitBtn");
let result = document.querySelector("#result")


calculate.addEventListener("click", function(e){
    e.preventDefault();
    //Set data parameters to form input
    const height = document.querySelector('#height-input').value;
    const weight = document.querySelector('#weight-input').value;
    //Calculation to determine Body Mass Index
    const calcHeight = (height * height)/10000;
    let bmi = weight / calcHeight;
    // Use toFixed(1) to round to the nearest tenth
    bmi = Number(bmi).toFixed(1);
    if(bmi < 18.5){
        document.querySelector("#result").innerHTML = `<div class="text-yellow-500"><h1>${bmi}</h1> <p>You are underweight</p></div>`;    
    } else if(bmi >= 18.5 && bmi < 25){
        document.querySelector("#result").innerHTML = `<div class="text-emerald-500"><h1>${bmi}</h1> <p>Your weight is normal</p></div>`;
    } else if(bmi >= 25 && bmi < 30) {
        document.querySelector("#result").innerHTML = `<div class="text-orange-500"><h1>${bmi}</h1> <p>You are overweight</p></div>`;
    } else {
        document.querySelector("#result").innerHTML = `<div class="text-red-500"><h1>${bmi}</h1> <p>You are obese</p></div>`;
    }
})



// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// =============================solution=============================

function calculateBMI(weight, height) {
    let bmi = 
    if(bmi <= 18.5){
      return 'Underweight';
    }else if(bmi <= 25){
      return 'Normal';
    }else if(bmi <= 30){
      return 'Overweight';
    }else{
      return 'Obese';
    }
  }

// ======================or================================


function calculateBMI(weight, height){
    let bmi = (weight / height ** 2) * 703
    return bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal': bmi <= 30 ? 'Overweight': 'Obese'
}

  
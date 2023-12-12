// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// ==============Solution==================

function bonusTime(salary, bonus) {
    let newSalary = salary
    if(bonus){
    newSalary *= 10
    }else{
        newSalary
    }
    return `£${newSalary}`     
}


// ============or===============

function bonusTime(salary, bonus) {
    let newSalary = bonus ? '£' + (salary*=10) : '£' + salary
    return newSalary     
}

console.log( bonusTime(40, false) )
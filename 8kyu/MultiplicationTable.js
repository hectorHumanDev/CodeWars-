// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// ==================Solution==========================



function multiTable(number) {
    let table = '';
    
    for(let i = 1; i <= 10; i++){
        let answer = 
        table += `${i} * ${number} = ${i * number} ${i < 10 ? '\n' : ''}`
    }
    return table
  }

  console.log( multiTable(5) )
function twoSum(numbers, target) {
    let num1
    let num2
    for(let i = 0; i <= numbers.length; i++){
      if(numbers.includes(target - numbers[i])){
         num1 =  i;
         const getNum2Index = (element, index) => {
            if(index !== num1){
                return false
            }
            return target - numbers[i] === element
         }
         num2 = numbers.findIndex(getNum2Index)
        break;
      } 
      }
    
      return [num1, num2]
    }

    //findIndex (function if === num1[i] return false )


    


  
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.


// ============================solution=================================



function points(arr) {
    let total = 0
    arr.map(game => {
      if(game[0] > game[2]){
        total += 3
      }else if(game[0] === game[2]){
        total += 1
      }else{
        return total
      }
    })
    return total
  }

console.log(points(["3:1", "2:2", "0:1"]))


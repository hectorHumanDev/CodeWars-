const arraySize = Math.pow(2, 32); //4294967296
console.log("arraySize: ", arraySize);
let largeArray = new Array(arraySize) //creates array with 4294967296 empty slots .fill(0); //
  .fill(0); //.fill(fillwith, from index, upto index) ---> does not specify beginning and end index
console.log("largeArray: ", largeArray);

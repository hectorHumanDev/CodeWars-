// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:
//--> 1 2 3
//    2 4 6
//    3 6 9

const multiplicationTable = (n) => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++) row.push(i * j);
    res.push(row);
  }
  return res;
};

console.log(multiplicationTable(3));

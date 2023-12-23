function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
  }

  console.log(removeSmallest([1, 2, 3, 4, 5]))
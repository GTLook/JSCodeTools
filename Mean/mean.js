const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

function mean(numbers) {
  let sum = 0;
  for (let i in numbers){
      sum = sum + numbers[i];
  }
  return sum/numbers.length;
}

mean(numbers)

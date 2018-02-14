const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

function mode(numbers) {
	debugger
    let isMode = 0;
    let currWin = 0;
    for(let i in numbers){
        if (countRepeats(numbers, i) > currWin){
            isMode = numbers[i];
            currWin = countRepeats(numbers, i);
        }
    }
  return isMode;


function countRepeats(numbers, i){
debugger
    let numRep = 0;  
    for (let j in numbers){
        if (numbers[i] == numbers[j]){
            numRep++;
        }
    }
    return numRep;
}

mode(numbers);

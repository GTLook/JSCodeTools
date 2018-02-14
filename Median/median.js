const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

function median(numbers) {
    if(numbers.length % 2 == 0){
        return (numbers[numbers.length/2-1]+numbers[numbers.length/2])/2
    }
    else{
        return numbers[numbers.length/2-0.5]
    } 
}

median(numbers)

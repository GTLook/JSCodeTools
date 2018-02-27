// If the input is empty, return an empty string
//join([]) // ''

// If there is no separator, separate by commas
//join([ 'a', 'b', 'c' ]) // 'a,b,c'

// If there is a separator, separate by that string
//join([ 'a', 'b', 'c' ], '-') // 'a-b-c'

// If there is only one item, return just that item
//join([ 'a' ], '---') // 'a'

function join (array, separator) {
  let result = array[0];
  if (array.length === 0){ return '';}
  if (separator == undefined){ separator=',';}
  for(let i=1;i<array.length;i++){
    result = result+separator+array[i];
  }
  return result;
}


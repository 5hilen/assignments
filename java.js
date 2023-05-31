const arr = [1,2,2,3];

function foo (array) {
  let a = [],
    b = [],
    arr = [...array], 
    prev;

  arr.sort();
  for (let element of arr) {
    if (element !== prev) {
      a.push(element);
      b.push(1);
    }
    else ++b[b.length - 1];
    prev = element;
  }

  return [a, b];
}

const result = foo(arr);
console.log('[' + result[0] + ']','[' + result[1] + ']')
console.log(arr)


const occurrences = [9,9,9,99].reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  console.log(occurrences) 








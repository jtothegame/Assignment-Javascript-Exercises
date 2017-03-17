// Iteratively
console.time('benchmark');

let sequence = function(num){
  if (num < 10){
    return num + num
  } else {
    let tmp = num.toString().split("")
    let a = parseInt(tmp[0])
    let b = parseInt(tmp[1])
    let c = a * b
    let d = c + num
    return d
  }
}

let digitProduct = function(n) {
    let result = 1
    for (i = 0; i < n - 1; i++) {
      result = sequence(result)
    }
    return result
}

console.log(digitProduct(10))

console.timeEnd('benchmark');

// Recursively
console.time('benchmark');

function digitProduct(num, current) {
 if (num === 1) {
   return current;
 } else {
   if (current < 10) {
    current = current + current;
    return digitProduct(num - 1, current);
   } else {
     let tmp = current.toString().split("");
     current = current + parseInt(tmp[0]) * parseInt(tmp[1]);
     return digitProduct(num - 1,  current);
   }
 }
}

console.log(digitProduct(10, 1));

console.timeEnd('benchmark');

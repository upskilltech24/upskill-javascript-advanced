let noArray = [1, 5, 5, 3];
// [1, 1, 5, 25]
// [75, 15 , 3, 1]
// expected output -> [75, 15, 15, 25]

let lA = [];
let rA = [];
let product = [];

for (let count = 0; count < noArray.length; count++) {
  if (count === 0) {
    lA.push(1);
  } else {
    lA.push(lA[count - 1] * noArray[count - 1]);
  }
}

for (let count = noArray.length - 1; count >= 0; count--) {
  if (count === noArray.length - 1) {
    rA.push(1);
  } else {
    rA.unshift(rA[0] * noArray[count + 1]);
  }
}
console.log(lA);
console.log(rA);
for (let count = 0; count < noArray.length; count++) {
  product.push(lA[count] * rA[count]);
}
console.log(product);

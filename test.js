alert("test Hello World!");

function sumElements(m, f) {
    let sum = 0;
    for (let i of m) {
        for (let j of f) {
            if (j % i === 0) {
                sum += i;
                break;
            }
        }
    }

    return sum;
}

const elements = [2, 4, 3, 6];
const multiplier = [3, 8, 9];

console.log("array 1 =", ""+elements);
console.log("array 2 =", ""+ multiplier);
console.log(sumElements(elements, multiplier))

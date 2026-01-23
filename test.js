const factorsElement = document.querySelector('.factors').value;
const multipleElement = document.querySelector('.multiples').value;
const resultElement = document.querySelector('.result')

function sumElements(f, m) {
    let sum = 0;
    for (let i of m) {
        for (let j of f) {
            if (i % j === 0) {
                sum += j;
                break;
            }
        }
    }

    return sum;
}

const factors = factorsElement.split(',');
const multiples = multipleElement.split(',');

console.log("array 1 =", ""+factors);
console.log("array 2 =", ""+ multiples);
resultElement.innerText = sumElements(factors, multiples)
const factorsElement = document.querySelector('.factors').value;
const multipleElement = document.querySelector('.multiples').value;
const resultElement = document.querySelector('.result');



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

document.querySelector('#submit').addEventListener('click', ()=>{
    const result = sumElements(factors, multiples);
    resultElement.innerText = result;
    console.log("array 1 =", ""+factors);
    console.log("array 2 =", ""+ multiples);
    console.log(result)
});

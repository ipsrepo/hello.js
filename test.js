const factorsElement = document.querySelector('.factors');
const multipleElement = document.querySelector('.multiples');
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


document.querySelector('#submit').addEventListener('click', ()=>{
    const factors = factorsElement.value.split(',');
    const multiples = multipleElement.value.split(',');
    const result = sumElements(factors, multiples);
    resultElement.innerText = result;
    console.log("array 1 =", ""+factors);
    console.log("array 2 =", ""+ multiples);
    console.log(result)
});

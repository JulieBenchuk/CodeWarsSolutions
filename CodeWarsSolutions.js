/*function add(num) {
    return num + 1;
}
function mult(num) {
    return num * 30;
}
function chain (num, fs){
    let length = chain.arguments[1].length
    let iResult;
    for (let i = 0; i<length; i++){
        iResult = fs[i](num);
        num = iResult
    }
    return num;
}
chain(2, [add, mult]);*/
//////////

function sumTwoSmallestNumbers(numbers) {
    let compareFn = (a,b)=> {
        if (a>b){
            return 1
        } else if (a<b){
            return -1
        } else return 0
    }
   let sortedArray = numbers.sort(compareFn)
    let firstNum = sortedArray[0]
    let secondNum = sortedArray[1]
    let result = firstNum+secondNum
    return result
}
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);
/////////////


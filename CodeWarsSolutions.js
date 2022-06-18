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
    let compareFn = (a, b) => {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else return 0
    }
    let sortedArray = numbers.sort(compareFn)
    let firstNum = sortedArray[0]
    let secondNum = sortedArray[1]
    let result = firstNum + secondNum
    return result
}

sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);

/////////////

function spongeMeme(sentence) {
    let sentenceArray = sentence.toLowerCase().split("")
    let newArray = [];
    for (let i = 0; i < sentenceArray.length; i++) {
        (i % 2 === 0) ? newArray.push(sentenceArray[i].toUpperCase()) : newArray.push(sentenceArray[i])
    }
    return newArray.join("")
}

spongeMeme("gggggggggggjk llll ")

////////
function getMiddle(s) {
    let arrayOfWords = s.split('')
    let length = s.length
    let newArray = [];
    if (length % 2 === 0) {
        let middle1 = length / 2-1
        let middle2 = length / 2
        newArray.push(arrayOfWords[middle1])
        newArray.push(arrayOfWords[middle2])
    } else {
        let middle = Math.trunc(length / 2)
        newArray.push(arrayOfWords[middle])
    }
    return newArray.join("")

}

getMiddle("julie")



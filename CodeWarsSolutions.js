function add(num) {
    return num + 1;
}

function mult(num) {
    return num * 30;
}

function chain(num, fs) {
    let length = chain.arguments[1].length
    let iResult;
    for (let i = 0; i < length; i++) {
        iResult = fs[i](num);
        num = iResult
    }
    return num;
}

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

/////////////

function spongeMeme(sentence) {
    let sentenceArray = sentence.toLowerCase().split("")
    let newArray = [];
    for (let i = 0; i < sentenceArray.length; i++) {
        (i % 2 === 0) ? newArray.push(sentenceArray[i].toUpperCase()) : newArray.push(sentenceArray[i])
    }
    return newArray.join("")
}

////////
function getMiddle(s) {
    let arrayOfWords = s.split('')
    let length = s.length
    let newArray = [];
    if (length % 2 === 0) {
        let middle1 = length / 2 - 1
        let middle2 = length / 2
        newArray.push(arrayOfWords[middle1])
        newArray.push(arrayOfWords[middle2])
    } else {
        let middle = Math.trunc(length / 2)
        newArray.push(arrayOfWords[middle])
    }
    return newArray.join("")
}


/////My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).
//
// Fortunately, I discovered that the virus hides my censored letters inside root directory.
//
// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

function uncensor(infected, discovered) {
    let arrayOfRightSymbol = discovered.split("") // M A I G
    console.log(arrayOfRightSymbol)
    for (let i = 0; i < discovered.length; i++) {
        infected = infected.replace("*", arrayOfRightSymbol[i])
    }
    return infected
}


//////Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    let arrayOfWords = this.split(" ")
    let arrayWithLetterUp=[];
    for (let i =0; i<arrayOfWords.length; i++){
      let newWordArr = arrayOfWords[i].split("")
        newWordArr[0]= newWordArr[0].toUpperCase()
        arrayWithLetterUp.push(newWordArr.join(""))
    }
    return (arrayWithLetterUp.join(" "))
};
//////



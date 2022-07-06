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
    let arrayWithLetterUp = [];
    for (let i = 0; i < arrayOfWords.length; i++) {
        let newWordArr = arrayOfWords[i].split("")
        newWordArr[0] = newWordArr[0].toUpperCase()
        arrayWithLetterUp.push(newWordArr.join(""))
    }
    return (arrayWithLetterUp.join(" "))
};
////// Dot Calculator
//
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
//
// Here are the following valid operators :
//
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division

function dotCalculator(equation) {
    const allArray = equation.split(" ")
    const firstNum = allArray[0].length
    const secondNum = allArray[2].length
    const operator = allArray[1]
    let result;
    switch (operator) {
        case "+":
            result = firstNum + secondNum
            console.log(result)
            break
        case "-":
            result = Math.abs(firstNum - secondNum)
            console.log(result)
            break
        case "*":
            result = firstNum * secondNum
            console.log(result)
            break
        case "//":
            result = Math.floor(firstNum / secondNum)
            console.log(result);
            break
    }
    let arr = [];
    for (let i = 1; i <= result; i++) {
        arr.push(".")
    }
    return arr.join("")
}

//dotCalculator("..... * ...............")


//////Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
//
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
//
// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
//
// Happiness rating will be total score / number of people in the room.
//
// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss) {
    let allNames = Object.keys(meet)
    let allScores = Object.values(meet)
    let bossNameOrder = allNames.findIndex(m=>m==boss) //1
    let bossName = allNames.find(m=>m==boss) //julie
    allScores.splice(bossNameOrder, 1)
    let scoreBoss = meet[bossName]*2
    let scoreMeet = allScores.reduce((a, b) => a + b)
    let scoreAll = scoreMeet + scoreBoss
    let average = scoreAll / (allNames.length)
    if (average <=5) {
        return ("Get Out Now!")
    } else {
        return ("Nice Work Champ!")
    }
}
let objMeet = {
    "nastya": 2,
    "julie": 10,
    "igor": 2
}
let boss = "julie"
//outed(objMeet, boss)



const letters = {
    1: ["A", "B", "C"],
    2: ["D", "E"],
    3: ["F", "H", "G"]
}

const getCombination = (lettersObj) => {
    if(lettersObj.length <= 1){
        return lettersObj[0]
    }

    const resultObj = []
    const block1 = lettersObj.shift()
    const block2 = lettersObj.shift()
    for(let i = 0; i < block1.length; i++){
        const firstLetter=block1[i]
        for(let i = 0; i < block2.length; i++){
            const secondLetter=block2[i]
            resultObj.push(firstLetter + secondLetter)
        }
    }

    lettersObj.unshift(resultObj)
    return getCombination(lettersObj)
}

const getCombinations = (text) => {
    let lettersObj = []
    for(let i = 0; i < text.length; i++){
        lettersObj.push(letters[text[i]]);
    }
    return getCombination(lettersObj)
}

console.log(getCombinations("123"))


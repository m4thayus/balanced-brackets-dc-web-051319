function isBalanced(brackets) {

    if (brackets.length % 2 !== 0) {
        return false
    } 

    brackets.split('')
    histogram = {}
    for (let i = 0; i < brackets.length; i++) {
        if (histogram[brackets[i]]) {
            histogram[brackets[i]] += 1
        } else {
            histogram[brackets[i]] = 1
        }
    }

    if (
        histogram["("] === histogram[")"] &&
        histogram["{"] === histogram["}"] &&
        histogram["["] === histogram["]"]
    ) {
        return true
    } else {
        return false
    }
}

console.log(isBalanced("()[]"))

console.log(isBalanced("([])"))

console.log(isBalanced("({)}"))

console.group(isBalanced("{[}"))
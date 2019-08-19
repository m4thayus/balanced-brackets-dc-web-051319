//Use a stack....

function isBalanced(brackets) {

    if (brackets.length % 2 !== 0) {
        return false
    } 

    brackets.split('')
    histogram = {}
    for (let i = 0; i < brackets.length; i++) {
        brace = brackets[i]
        console.log("Brace:", brace)
        if (!!histogram[brace]) {
            histogram[brace] += 1
        } else {
            if (brace === ")" && !!histogram["("]) {
                histogram["("] -= 1
                if (histogram["("] < 0) {
                    return false
                }
            } else if (brace === "}" && !!histogram["{"]) {
                histogram["{"] -= 1
                if (histogram["{"] < 0) {
                    return false
                }
            } else if (brace === "]" && !!histogram["["]) {
                histogram["["] -= 1
                if (histogram["["] < 0) {
                    return false
                }
            } else {
                histogram[brace] = 1
            }
        }

        console.log(`Run ${i}:`, histogram)
    }

    let flag1 = false
    let flag2 = false
    let flag3 = false

    if (!histogram["{"] || histogram["{"] === 0) {
        flag1 = true
    } 
    console.log("{", flag1)

    if (!histogram["("] || histogram["("] === 0) {
        flag2 = true
    }
    console.log("(", flag2)

    if (!histogram["["] || histogram["["] === 0) {
        flag3 = true
    }
    console.log("[", flag3)

    console.log("Hist", histogram)
    return flag1 && flag2 && flag3
}

console.log("Balanced:", isBalanced("()[]"), "true")
console.log()
console.log("Balanced:", isBalanced("([])"), "true")
console.log()
console.log("Balanced:", isBalanced("({)}"), "true")
console.log()
console.log("Balanced",  isBalanced("{[}"), "false")

console.log()
console.log()

console.log("Balanced",  isBalanced("([])[{}]{(())}"), "true")
console.log()
console.log("Balanced",  isBalanced("([])[{}]{(([))}"), "false")
console.log()
console.log("Balanced",  isBalanced("([])[{}]{([)]}"), "false")
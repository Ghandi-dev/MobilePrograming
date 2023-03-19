function sum(startNum, finishNum, step) {
    var array = 0
    var i = 0
    var step = typeof (step) == "undefined" ? 1 : step
    if (typeof (startNum) != "undefined" && typeof (finishNum) != "undefined") {
        if (startNum <= finishNum) {
            while (startNum <= finishNum) {
                array += startNum
                startNum += step
                i++
            }
            return array
        } else if (startNum > finishNum) {
            while (startNum >= finishNum) {
                array += startNum
                startNum -= step
                i++
            }
            return array
        }
    } else if (typeof (startNum) != "undefined") {
        return startNum
    } else {
        return 0
    }
}
console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0
// Nama : Sonnya Ghandi
// Kelas : Informatika Malam A
// NIM : 201351131
function rangeWithStep(startNum, finishNum, step) {
  var array = [];
  var i = 0;
  if (typeof startNum != "undefined" && typeof finishNum != "undefined") {
    if (startNum <= finishNum) {
      while (startNum <= finishNum) {
        array.push(startNum);
        startNum += step;
        i++;
      }
      return array;
    } else if (startNum > finishNum) {
      while (startNum >= finishNum) {
        array.push(startNum);
        startNum -= step;
        i++;
      }
      return array;
    }
  } else {
    return -1;
  }
}

console.log(rangeWithStep(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)); // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]

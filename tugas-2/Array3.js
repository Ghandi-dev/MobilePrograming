// Nama : Sonnya Ghandi
// Kelas : Informatika Malam A
// NIM : 201351131
function sum(startNum, finishNum, step) {
  var sum = 0;
  var i = 0;
  var step = typeof step == "undefined" ? 1 : step;
  if (typeof startNum != "undefined" && typeof finishNum != "undefined") {
    if (startNum <= finishNum) {
      while (startNum <= finishNum) {
        sum += startNum;
        startNum += step;
        i++;
      }
      return sum;
    } else if (startNum > finishNum) {
      while (startNum >= finishNum) {
        sum += startNum;
        startNum -= step;
        i++;
      }
      return sum;
    }
  } else if (typeof startNum != "undefined") {
    return startNum;
  } else {
    return 0;
  }
}
console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());

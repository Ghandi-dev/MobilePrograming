// Nama : Sonnya Ghandi
// Kelas : Informatika Malam A
// NIM : 201351131
function range(startNum, finishNum) {
  var array = [];
  var i = 0;
  if (typeof startNum != "undefined" && typeof finishNum != "undefined") {
    if (startNum <= finishNum) {
      while (startNum <= finishNum) {
        array.push(startNum);
        startNum++;
        i++;
      }
      return array;
    } else if (startNum > finishNum) {
      while (startNum >= finishNum) {
        array.push(startNum);
        startNum--;
        i++;
      }
      return array;
    }
  } else {
    return -1;
  }
}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11, 18));
console.log(range(54, 50));
console.log(range());

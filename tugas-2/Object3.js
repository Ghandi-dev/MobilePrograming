function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var result = [];
  arrPenumpang.forEach((penumpang) => {
    var object = {};
    var bayar = 0;
    object["penumpang"] = penumpang[0];
    object["naikDari"] = penumpang[1];
    object["tujuan"] = penumpang[2];
    for (
      let i = rute.indexOf(penumpang[1]);
      i <= rute.indexOf(penumpang[2]);
      i++
    ) {
      if (penumpang[1] != rute[i]) {
        bayar += 2000;
        object["bayar"] = bayar;
      }
    }
    result.push(object);
  });
  return result;
}

console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
console.log(naikAngkot([])); //[]

function balikKata(kata) {
  let kebalikan = "";
  for (let char of kata) {
    kebalikan = char + kebalikan;
  }
  return kebalikan;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("Informatika"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Humanikers"));

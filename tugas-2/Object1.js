function arrayToObject(input) {
    let object = {}
    let i = 1;
    const tahunSekarang = new Date().getFullYear()
    input.forEach(element => {
        object["firstName"] = element[0]
        object["lastName"] = element[1]
        object["gender"] = element[2]
        object["age"] = (element[3] >= tahunSekarang || typeof (element[3]) == "undefined") ? "Invalid Birth Day" : tahunSekarang - element[3]
        console.log(`${i++}. ${object.firstName} ${object.lastName} : ${JSON.stringify(object)}`);
    });
}

var people = [["Bruce", "Banner", "male", 1975], ["Natasha",
    "Romanoff", "female"]]
console.log(typeof (people));
arrayToObject(people)
var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots",
    "female", 2023]]
arrayToObject(people2)
arrayToObject([])
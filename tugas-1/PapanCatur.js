var c = ""
var panjang = 8
var lebar = 8
for (let i = 1; i <= lebar; i++) {
    if (i % 2 == 0) {
        for (let j = 1; j <= panjang; j++) {
            if (j % 2 == 0) {
                c += "#"
            } else {
                c += " "
            }
        }
    } else {
        for (let j = 1; j <= panjang; j++) {
            if (j % 2 == 0) {
                c += " "
            } else {
                c += "#"
            }
        }
    }

    c += '\n'
}
console.log(c);

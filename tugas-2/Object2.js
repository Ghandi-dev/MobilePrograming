function shoppingTime(memberId, money) {
    var barang = { 'Sepatu Stacattu': 1500000, 'Baju Zoro': 500000, 'Baju H&N': 250000, 'Sweater Uniklooh': 175000, 'Casing Handphone': 50000 }
    var purcashed = []
    var object = { 'memberId': memberId, 'money': money }
    if (memberId == '' || typeof (memberId) == "undefined") {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < 50000 || typeof (money) == "undefined") {
        return "Mohon maaf, uang tidak cukup"
    } else {
        Object.keys(barang).forEach(key => {
            if (money >= barang[key]) {
                purcashed.push(key)
                object["listPurcashed"] = purcashed
                money -= barang[key]
                object["changeMoney"] = money
            }
        })
        return object
    }
}
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
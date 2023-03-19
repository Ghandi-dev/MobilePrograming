function dataHandling(input) {
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(input)
    var tanggalSort = input[3].split("/")
    var tanggal = input[3].split("/")
    switch (parseInt(tanggal[1])) {
        case 1:
            console.log("Januari");
            break;

        case 2:
            console.log("Februari");
            break;

        case 3:
            console.log("Maret");
            break;

        case 4:
            console.log("April");
            break;

        case 5:
            console.log("Mei");
            break;

        case 6:
            console.log("Juni");
            break;

        case 7:
            console.log("Juli");
            break;

        case 8:
            console.log("Agustus");
            break;

        case 9:
            console.log("September");
            break;

        case 10:
            console.log("Oktober");
            break;

        case 11:
            console.log("November");
            break;

        case 12:
            console.log("Desember");
            break;

        default:
            break;
    }

    console.log(tanggalSort.sort(function (a, b) { return b - a }));
    console.log(tanggal.join("-"))
    var nama = input[1]
    if (nama.length > 15) {
        console.log(nama.slice(0, 15));
    } else {
        console.log(nama);
    }
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling(input)
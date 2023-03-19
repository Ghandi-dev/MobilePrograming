for (let index = 1; index <= 20; index++) {
    if ((index % 3 == 0) && (index % 2 != 0)) {
        console.log(`${index} - I love coding`);
    } else if (index % 2 != 0) {
        console.log(`${index} - Teknik`);
    } else if (index % 2 == 0) {
        console.log(`${index} - Informatika`);
    }
}
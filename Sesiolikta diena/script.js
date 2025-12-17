function auditGifts() {
    const workshops = [
        [5, 7, 3],
        [6, 4, 4, 5],
        [10, 2]
    ];

    let grandTotal = 0;
    let output = "";

    for (let i = 0; i < workshops.length; i++) {
        let workshopTotal = 0;

        for (let j = 0; j < workshops[i].length; j++) {
            workshopTotal += workshops[i][j];
        }

        output += `Workshop ${i + 1} made ${workshopTotal} gifts\n`;
        grandTotal += workshopTotal;
    }

    output += `\nSanta’s total gift count is ${grandTotal}`;

    document.getElementById("output").textContent = output;
}

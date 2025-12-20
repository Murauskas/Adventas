function calculateShopping() {
    const stores = [
        [1.07, 2.92, 3.45, 1.09, 0.89],
        [1.08, 2.35, 3.75, 1.12, 0.69],
        [0.98, 2.48, 3.62, 1.10, 0.72]
    ];

    let output = "";
    let grandTotal = 0;

    for (let i = 0; i < stores.length; i++) {
        let storeSum = 0;

        for (let j = 0; j < stores[i].length; j++) {
            storeSum += stores[i][j];
        }

        grandTotal += storeSum;

        output += `${i + 1} ${stores[i].length} ${storeSum.toFixed(2)}\n`;
    }

    output += grandTotal.toFixed(2);

    document.getElementById("output").textContent = output;
}

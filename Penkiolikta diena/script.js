function calculate() {
    const x = Number(document.getElementById("priceX").value);
    const y = Number(document.getElementById("priceY").value);
    const z = Number(document.getElementById("priceZ").value);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        document.getElementById("result").textContent =
            "Please enter all three prices.";
        return;
    }

    const minPrice = Math.min(x, y, z);

    document.getElementById("result").textContent =
        `Peter will spend ${minPrice.toFixed(2)} €`;
}

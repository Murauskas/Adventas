function startGiftBag() {
    let total = 0;
    let count = 0;

    while (true) {
        let input = prompt("Įvesk žaislo kainą (0 = pabaiga):");

        if (input === null) break;

        let price = parseFloat(input);

        if (isNaN(price)) {
            alert("Įvesk skaičių!");
            continue;
        }

        if (price === 0) break;

        if (price > 10) {
            total += price;
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        `Total price of magical toys: <b>${total.toFixed(2)} EUR</b><br>` +
        `Number of magical toys: <b>${count}</b>`;
}

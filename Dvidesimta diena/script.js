function generateBill() {
    const elves = [
        {
            firstName: "Jingle",
            lastName: "Sparkfoot",
            calls: [
                { city: "London", minutes: 12 },
                { city: "Paris", minutes: 7 }
            ]
        },
        {
            firstName: "Twinkle",
            lastName: "Icicletoes",
            calls: [
                { city: "NewYork", minutes: 20 },
                { city: "London", minutes: 5 }
            ]
        },
        {
            firstName: "Pudding",
            lastName: "Gumdrops",
            calls: [
                { city: "Paris", minutes: 15 }
            ]
        }
    ];

    const priceList = {
        London: 0.50,
        Paris: 0.40,
        NewYork: 0.70
    };

    const results = [];

    for (let i = 0; i < elves.length; i++) {
        let total = 0;

        for (let j = 0; j < elves[i].calls.length; j++) {
            const call = elves[i].calls[j];
            const pricePerMinute = priceList[call.city];
            total += call.minutes * pricePerMinute;
        }

        results.push({
            firstName: elves[i].firstName,
            lastName: elves[i].lastName,
            total: total
        });
    }

    results.sort((a, b) => a.lastName.localeCompare(b.lastName));

    let output = "";
    let grandTotal = 0;

    for (let i = 0; i < results.length; i++) {
        output += `${results[i].lastName} ${results[i].firstName} ${results[i].total.toFixed(2)}\n`;
        grandTotal += results[i].total;
    }

    output += `Total: ${grandTotal.toFixed(2)}`;

    document.getElementById("output").textContent = output;
}

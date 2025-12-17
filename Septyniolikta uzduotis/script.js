function bottleJuice() {
    const elves = [
        { name: "Sparkle", liters: 45 },
        { name: "Twinkle", liters: 92 },
        { name: "Jingle", liters: 33 }
    ];

    let output = "";

    for (let i = 0; i < elves.length; i++) {
        let liters = elves[i].liters;

        const fiveLiter = Math.floor(liters / 5);
        liters = liters % 5;

        const twoLiter = Math.floor(liters / 2);
        liters = liters % 2;

        const oneLiter = liters;

        output += `${elves[i].name}: ${fiveLiter} ${twoLiter} ${oneLiter}\n`;
    }

    document.getElementById("output").textContent = output;
}

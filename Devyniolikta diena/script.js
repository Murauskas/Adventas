function findDuplicates() {
    const input = document.getElementById("toysInput").value.trim();

    if (input === "") {
        document.getElementById("output").textContent = "";
        return;
    }

    const toys = input.split(/\s+/).map(Number);

    const count = {};

    for (let i = 0; i < toys.length; i++) {
        const toy = toys[i];
        if (count[toy]) {
            count[toy]++;
        } else {
            count[toy] = 1;
        }
    }

    const duplicates = [];

    for (let toy in count) {
        if (count[toy] > 1) {
            duplicates.push(Number(toy));
        }
    }

    duplicates.sort((a, b) => a - b);

    document.getElementById("output").textContent =
        duplicates.length > 0 ? duplicates.join(" ") : "No toys to trade";
}

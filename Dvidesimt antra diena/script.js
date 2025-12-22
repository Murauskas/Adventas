function buildTree() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("output");
    output.textContent = "";

    if (!input.trim()) return;

    const lines = input.split("\n");
    let rearranged = [];

    for (let line of lines) {
        const words = line.trim().split(/\s+/);
        let i = 0;
        let count = 1;

        while (i < words.length) {
            rearranged.push(words.slice(i, i + count).join(" "));
            i += count;
            count++;
        }
    }

    rearranged = rearranged.slice(0, 100);

    const maxLen = Math.max(...rearranged.map(l => l.length));

    const result = rearranged.map((line, index) => {
        if (index % 2 === 0) {
            return " ".repeat(maxLen - line.length) + line;
        } else {
            return " ".repeat(maxLen) + line;
        }
    });

    output.textContent = result.join("\n");
}

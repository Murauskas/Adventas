function countGirls() {
    const input = document.getElementById("studentsInput").value.trim();

    if (input === "") {
        document.getElementById("output").textContent = "0";
        return;
    }

    const students = input.split("\n");
    let girls = [];

    for (let student of students) {
        const parts = student.trim().split(" ");
        if (parts.length < 2) continue;

        const firstName = parts[1];

        if (firstName.endsWith("a") || firstName.endsWith("ė")) {
            girls.push(student.trim());
        }
    }

    let result = "";
    result += girls.length + "\n";

    for (let girl of girls) {
        result += girl + "\n";
    }

    document.getElementById("output").textContent = result;
}

const xc = 0, yc = 0;

const radii = [30, 70, 110, 150];  // 4 rings

const target = document.getElementById("target");

const maxRadius = radii[radii.length - 1];
const scale = 1;

radii.forEach(r => {
    const ring = document.createElement("div");
    ring.className = "ring";
    ring.style.width = (r * 2) + "px";
    ring.style.height = (r * 2) + "px";
    ring.style.left = "50%";
    ring.style.top = "50%";
    ring.style.transform = "translate(-50%, -50%)";
    target.appendChild(ring);
});

function getScore(d, radii) {
    const EPS = 0.5;

    if (Math.abs(d - radii[0]) <= EPS) return 25;
    if (Math.abs(d - radii[1]) <= EPS) return 20;
    if (Math.abs(d - radii[2]) <= EPS) return 15;
    if (Math.abs(d - radii[3]) <= EPS) return 10;

    if (d < radii[0]) return 50;
    if (d < radii[1]) return 40;
    if (d < radii[2]) return 30;
    if (d < radii[3]) return 20;

    return 0;
}


function shoot() {
    const x = Number(document.getElementById("inputX").value);
    const y = Number(document.getElementById("inputY").value);

    const oldDot = document.querySelector(".dot");
    if (oldDot) oldDot.remove();

    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = 200 + x * scale + "px";
    dot.style.top = 200 - y * scale + "px";
    target.appendChild(dot);

    const d = Math.sqrt((x - xc)**2 + (y - yc)**2);

    const score = getScore(d, radii);

    document.getElementById("result").innerHTML =
        "Arrow Score: <span style='color:yellow'>" + score + "</span>";
}

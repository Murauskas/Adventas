function sortKey(word){
  return word.split('').sort().join('');
}

function groupAnagrams(wordsArray){
  const map = new Map();
  for (let w of wordsArray){
    if (w === "") continue;
    const key = sortKey(w);
    const arr = map.get(key);
    if (arr) arr.push(w);
    else map.set(key, [w]);
  }
  return Array.from(map.values());
}

const input = document.getElementById("inputWords");
const out = document.getElementById("output");
const summary = document.getElementById("summary");
const btn = document.getElementById("groupBtn");
const clearBtn = document.getElementById("clearBtn");
const exampleBtn = document.getElementById("exampleBtn");
const sortInside = document.getElementById("sortInside");
const sortGroups = document.getElementById("sortGroups");

function parseInput(text){
  return text
    .split(/[\s,]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

function renderGroups(groups){
  out.innerHTML = "";
  let total = 0;
  for (let g of groups){
    total += g.length;
    const node = document.createElement("div");
    node.className = "group";

    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = g.length;

    const wordsWrap = document.createElement("div");
    wordsWrap.className = "words";
    for (let w of g){
      const wEl = document.createElement("div");
      wEl.className = "word";
      wEl.textContent = w;
      wordsWrap.appendChild(wEl);
    }

    node.appendChild(badge);
    node.appendChild(wordsWrap);
    out.appendChild(node);
  }

  summary.innerHTML = `Groups: ${groups.length} — Total words: ${total}`;
}

function doGroup(){
  const raw = input.value.trim();
  if (!raw){
    out.innerHTML = "<div class='summary'>Please enter some words above.</div>";
    summary.textContent = "";
    return;
  }

  let words = parseInput(raw);

  let groups = groupAnagrams(words);

  if (sortInside.checked){
    groups.forEach(g => g.sort((a,b)=> a.localeCompare(b)));
  }

  if (sortGroups.checked){
    groups.sort((a,b) => b.length - a.length);
  }

  renderGroups(groups);
}

btn.addEventListener("click", doGroup);

clearBtn.addEventListener("click", ()=> {
  input.value = "";
  out.innerHTML = "";
  summary.textContent = "";
});

exampleBtn.addEventListener("click", ()=>{
  input.value = "eat tea tan ate nat bat santa nasta ants anst\nlisten silent enlists tinsel";
});

input.addEventListener("keydown", (e)=>{
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)){
    doGroup();
  }
});

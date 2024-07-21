const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
const polishAlphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";

const gray = "lightgray";
const red = "red";
const green = "green";

const pangram = document.getElementById("pangram");
const alphabet = document.getElementById("alphabet");
const diodes = document.getElementById("diodes");

var diodeMap = {};

alphabet.onchange = (event) => {
    const chars = alphabet.value;
    diodes.textContent = "";
    diodeMap = {};
    for (let i = 0; i < chars.length; ++i) {
        const c = chars[i].toLowerCase();
        let element = document.createElement("span");
        element.className = "diode";
        element.textContent = c;
        if (diodeMap[c] == undefined) {
            diodeMap[c] = element;
            diodes.appendChild(element);
        }
    }
}

alphabet.oninput = alphabet.onchange;

pangram.onchange = (event) => {
    let map = {};
    const chars = pangram.value;
    for (let i = 0; i < chars.length; ++i) {
        const c = chars[i].toLowerCase();
        if (map[c] == undefined) map[c] = 1;
        else map[c] += 1;
    }

    for (const [k, v] of Object.entries(diodeMap)) {
        v.style.backgroundColor = gray;
    }
    
    for (const [k, v] of Object.entries(map)) {
        const element = diodeMap[k];
        if (element != undefined) {
            console.log(v);
            if (v == 0) {
                element.style.backgroundColor = gray;
            } else if (v == 1) {
                element.style.backgroundColor = green;
            } else {
                element.style.backgroundColor = red;
            }
        }
    }
}
pangram.oninput = pangram.onchange;

// TODO: buttons to quickly set the alphabet
// alphabet.textContent = englishAlphabet;
alphabet.textContent = polishAlphabet;
alphabet.onchange();

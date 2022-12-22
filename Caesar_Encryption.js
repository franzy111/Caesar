const fs = require('fs');
let arg = process.argv;
let inpStr;
try {
    inpStr = fs.readFileSync(arg[2]).toString();
} catch (err) {
    console.log(err);
}
let shift = parseInt(arg[3]);
let cipher = '';
const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const Alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
for (let i = 0; i < inpStr.length; i++) {
    if (Alph.includes(inpStr[i]))
        cipher += Alph[(Alph.indexOf(inpStr[i]) + shift) % 26];
    else if (alph.includes(inpStr[i]))
        cipher += alph[(alph.indexOf(inpStr[i]) + shift) % 26];
    else
        cipher += inpStr[i];
}
fs.writeFileSync('encryption.txt', cipher, 'utf-8');

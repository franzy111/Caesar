const fs = require('fs');
let arg = process.argv;
let inpStr;
try {
    inpStr = fs.readFileSync(arg[2]).toString();
} catch (err) {
    console.log(err);
}
const cf = {'a' : 0.0817, 'b' : 0.0149, 'c' : 0.0278, 'd' : 0.0425, 'e' :
        0.127, 'f' : 0.0223, 'g':0.0202, 'h' : 0.0609, 'i' : 0.0675, 'j' : 0.0015, 'k' : 0.0077, 'l' :
        0.0403, 'm' : 0.0241, 'n' : 0.0675, 'o' : 0.0751, 'p' : 0.0193, 'q' : 0.001, 'r' :
        0.0599, 's' : 0.0633, 't' : 0.0906, 'u' : 0.0276, 'v' : 0.0098, 'w' : 0.0236, 'x' :
        0.0015, 'y' : 0.0197, 'z' : 0.0005 };
let ff = {'a' : 0, 'b' : 0, 'c' : 0, 'd' : 0, 'e' : 0, 'f' : 0, 'g' : 0, 'h' : 0, 'i' : 0, 'j' : 0, 'k' :
        0, 'l' : 0, 'm' : 0, 'n' : 0, 'o' : 0, 'p' : 0, 'q' : 0, 'r' : 0, 's' : 0, 't' : 0, 'u' : 0, 'v' :
        0, 'w' : 0, 'x' : 0, 'y' : 0, 'z' : 0};
const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const Alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let countOfLet = 0;
for (let i = 0; i < inpStr.length; i++){
    if (Alph.includes(inpStr[i]) || alph.includes(inpStr[i])){
        countOfLet++;
        ff[inpStr[i]]++;
    }
}
for (let key in ff)
    ff[key] /= countOfLet;
let min = Number.POSITIVE_INFINITY;
let shift = 0;
for (let i = 0; i < 26; i++){
    let res = 0;
    for (let j = 0; j < 26; j++)
        res += Math.abs(cf[alph[j]] - ff[alph[(j + i) % 26]]) * Math.abs(cf[alph[j]] - ff[alph[(j + i) % 26]]);
    if (res < min){
        min = res;
        shift = i;
    }
}
let out = '';
for (let i = 0; i < inpStr.length; i++){
    if (alph.includes(inpStr[i])){
        if (alph.indexOf(inpStr[i]) - shift < 0)
            out += alph[(26 + alph.indexOf(inpStr[i]) - shift) % 26]
        else
            out += alph[alph.indexOf(inpStr[i]) - shift]
    }else if (Alph.includes(inpStr[i])){
        if (Alph.indexOf(inpStr[i]) - shift < 0)
            out += Alph[(26 + Alph.indexOf(inpStr[i]) - shift) % 26]
        else
            out += Alph[Alph.indexOf(inpStr[i]) - shift]
    }else
        out += inpStr[i];
}
fs.writeFileSync('decryption.txt', out, 'utf-8');

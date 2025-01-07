const doms = {
  result: document.getElementById("result"),
  length: document.getElementById("length"),
  uppercase: document.getElementById("uppercase"),
  lowercase: document.getElementById("lowercase"),
  numbers: document.getElementById("numbers"),
  symbols: document.getElementById("symbols"),
  clipboard: document.getElementById("clipboard"),
  generate: document.getElementById("generate"),
};
const funs = {
  low: getRandomLower,
  up: getRandomUpper,
  sym: getRandomSymbol,
  num: getRandomNumber,
};
doms.generate.addEventListener("click", generate);
function generate() {
  const isLow = doms.lowercase.checked;
  const isUp = doms.uppercase.checked;
  const isSym = doms.symbols.checked;
  const isNum = doms.numbers.checked;
  const length = +doms.length.value;

  doms.result.textContent = createStr({ isLow, isUp, isSym, isNum }, length);
}
function createStr({ isLow: low, isUp: up, isSym: sym, isNum: num }, length) {
  let generateStr = "";
  const arr = [{ low }, { up }, { sym }, { num }].filter(
    (v) => Object.values(v)[0]
  );

  const typeLength = arr.length;
  if (!typeLength) return "";
  for (let i = 0; i < length; i += typeLength) {
    for (const v of arr) {
      generateStr += funs[Object.keys(v)[0]]();
    }
  }
  return generateStr.slice(0, length);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

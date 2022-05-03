// const nameIs = "Vaida";
// const age = 26;

// function getAge() {
//   return age;
// }

// // const output = "Labas, mano vardas " + nameIs + " man " + age + " metu.";
// // const output = `Labas, mano vardas ${nameIs} man ${age < 30 ? "A" : "B"} metu.`;
// const output = `<div>This is div</div>
//   <p>this is o</p>
// `;

// console.log(output);

// const name = 'Vaida'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('влад'))
// console.log(name.startsWith('Влад'))
// console.log(name.endsWith('ен!'))
// console.log(name.repeat(3))
// const string = '     password      '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
  if (age < 0) {
    age = "Dar negimes";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Vaida";
const personName2 = "Laura";
const personAge = 26;
const personAge2 = -10;

const output = logPerson`Vardas: ${personName}, Amzius: ${personAge}!`;
const output2 = logPerson`Vardas: ${personName2}, Amzius: ${personAge2}!`;

console.log(output);
console.log(output2);

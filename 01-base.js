// const firstName = "Ona";
// const age = 25;
// const isDancer = true;

// const lastName = prompt("Iveskite pavarde");
// alert(firstName + " " + lastName);

// Operatoriai
// let currentYear = 2022;
// const birthYear = 1996;

// // const age = currentYear - birthYear;

// console.log(age);

// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a;
// c = c - a;
// c += a;
// c -= a;
// c *= a;
// c /= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// 4 duomenu tipai
// const isDancer = true;
// const name = "Ona";
// const age = 25;
// let x;
// console.log(typeof isDancer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null);

// 6 operatoriai palyginamieji
// const courseStatus = "fail"; //ready, fail, pending

// if (courseStatus === "ready") {
//   console.log("Kursas paruostas, galima mokytis");
// } else if (courseStatus === "pending") {
//   console.log("Kursas ruosiamas");
// } else {
//   console.log("Kursas neparuostas");
// }

let isReady = true;

if (isReady) {
  console.log("Paruosta");
} else {
  console.log("Neparuosta");
}
// viskas tas pats kas viruje, tik parasyta su (ternary) operatoriumi
isReady ? console.log("Paruosta") : console.log("Neparuosta");

// 7 boolenai
a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 == 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
// a10 = "Dog" && "Cat"; // t && t returns "Cat"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false

// 8 funkcijos
function calculateAge(yaers) {
  return 2022 - yaers;
}

let myAge = calculateAge(1996);
console.log(myAge);

function calculateWeight(kg) {
  return 100 - kg;
}

// console.log(calculateWeight(39));
// console.log(calculateWeight(29));
// console.log(calculateWeight(33));

//funkcija

// function logInfoAbout(name, years) {
//   const age = calculateAge(years);
//   console.log("Zmogui vardu " + name + " " + age + " metai");
// }

// logInfoAbout("Ona", 1996);
// logInfoAbout("Rita", 1977);

//ir ta pati funkcija parasyta kitaip

function logInfoAbout(name, years) {
  const age = calculateAge(years);

  if (age > 0) {
    console.log("Zmogui vardu " + name + " " + age + " metai");
  } else {
    console.log("Ateitis");
  }
}

logInfoAbout("Ona", 1996);
logInfoAbout("Rita", 1977);
logInfoAbout("Ruta", 2022);

// 9 Arrays

// let cars = ["Audi", "Mersedes", "Ford"];
// console.log(cars);
// console.log(cars[0]);
// console.log(cars.length);

// cars[0] = "Porsche";
// cars[3] = "Mazda";
// cars[cars.length] = "Jeep";
// console.log(cars);

// 10 Ciklai
// let cars = ["Audi", "Mersedes", "Ford"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(i); // spausdina 0, 1, 2
// }

let cars = ["Audi", "Mersedes", "Ford"];

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car); //spausdina Audi, Mersedes, Ford
// }

//arba su for ir or
for (let car of cars) {
  console.log(car);
}

// 11 Objektai
const person = {
  firstName: "Rasa",
  lastName: "Lailai",
  year: 1996,
  languages: ["En", "De", "Fr", "Lt"],
  hasWhife: true,
  greet: function () {
    console.log("greet from person");
  },
};
console.log(person.firstName);
console.log(person["lastName"]); // arba su []
const key = "languages"; // arba su key
console.log(person[key]);
person.hasWhife = false;
person.sDancer = true;
console.log(person);

person.greet();

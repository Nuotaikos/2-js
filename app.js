///funkcijos
//js function declaration vs function expression kuo skiriasi
function greet(name) {
  console.log("Labas -", name);
}

//function expression
const greet2 = function greet2(name) {
  console.log("Labas 2 -", name);
};
greet("Olia");
greet2("Rita");

let personAge = 17;
if (personAge <= 18) {
    console.log("persona nav pilgadīga");
} else {
    console.log("persona ir pilgadīga");
}

let namesArry = ["Jānis", "Anna", "Zaiga"];

for (let i = 0; i < namesArry.length; i++) {
    console.log(namesArry[i]);
}
function sayHello(name) {
    return "Labdien," + name + "!"
}
console.log(sayHello)("Gvido");

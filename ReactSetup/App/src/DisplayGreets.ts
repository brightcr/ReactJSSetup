import { Greetings } from "./Greetings";
let welcomeMessage = Greetings.Message;

document.getElementById("myapp").innerHTML = `<h1>${welcomeMessage}</h1>`;
console.log(welcomeMessage);
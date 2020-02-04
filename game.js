
function guessing () {


let userNumber = document.getElementById("userNumber").value;

let num = (Math.floor(Math.random()*10)) + 1

console.log(num);

console.log(userNumber);

if (userNumber==num) {
    document.getElementById("output").innerHTML = "You guessed right!";
    document.getElementById("output").style.backgroundColor ="green";

}
else {
    document.getElementById("output").innerHTML="You guessed wrong!";
    document.getElementById("output").style.backgroundColor ="red";
}

}
console.log("hi harsh")

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable = "Bob";
myVariable=10;
console.log(myVariable);

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

let mux=multiply(10,8);
console.log(mux+2);

document.querySelector("h1").addEventListener("click",()=> {alert("don't  click me")});

const myimage=document.querySelector("img");
myimage.onclick= ()=>{
  const  mysrc=myimage.getAttribute("src");
  if (mysrc==="Harsh.jpg"){
    myimage.setAttribute("src","Harsh2.jpg");
    alert("image will be changed");
  }
}
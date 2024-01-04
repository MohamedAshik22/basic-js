 let myButton = document.querySelector("button")
 let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = ` mozilla is fire, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `mozilla is fire, $(storedName)` ;
}

myButton.onclick = () => {
    setUserName ();
}

function setUserName() {
    const myName = prompt("please enter your name.");
    if (!myName){
        setUserName 
        ();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = ` mozilla is fire, ${myName}`;
    }
 }



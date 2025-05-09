const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/3D Logo Mockup on Glass Wall - PHOTOPEA.jpg") {
    myImage.setAttribute("src", "images/toma pg 8.png");
  } else {
    myImage.setAttribute("src", "images/3D Logo Mockup on Glass Wall - PHOTOPEA.jpg");
  }
});

const myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt ("Please enter your name.");
  if (myName) {
  localStorage.setItem("name", myName);
  myHeading.textContent = 'Astreox is Awesome!, ${myName}';
} else {
  setUserName();
}
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = 'Astreox is Awesome!, ${storedName}';
}

myButton.addEventListener("click", () => {
  setUserName();
});
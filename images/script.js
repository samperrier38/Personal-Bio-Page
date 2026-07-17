// This code shows or hides the fun fact when the button is clicked.

const button = document.getElementById("factButton");
const funFact = document.getElementById("funFact");

button.addEventListener("click", function () {

    if (funFact.style.display === "none") {
        funFact.style.display = "block";
    } else {
        funFact.style.display = "none";
    }

});
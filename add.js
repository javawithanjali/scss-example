const goodBtn = document.getElementById("goodbtn");
const badBtn = document.getElementById("badbtn");

goodBtn.addEventListener("click", () => {
    alert("Thanks! 😊 We are happy you had a good experience.");
    document.body.style.backgroundColor = "#d4edda";
});

badBtn.addEventListener("click", () => {
    alert("Sorry! 😒 We will try to improve your experience.");
    document.body.style.backgroundColor = "#f8d7da";
});
// Select buttons
const goodBtn = document.getElementById("goodbtn");
const badBtn = document.getElementById("badbtn");

// Good experience button click
goodBtn.addEventListener("click", () => {
    alert("Thanks! 😊 We are happy you had a good experience.");
    
    // Optional UI change
    document.body.style.backgroundColor = "#d4edda";
});

// Bad experience button click
badBtn.addEventListener("click", () => {
    alert("Sorry! 😒 We will try to improve your experience.");
    
    // Optional UI change
    document.body.style.backgroundColor = "#f8d7da";
});
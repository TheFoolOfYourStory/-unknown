// Start Investigation
document.getElementById("startBtn").onclick = function() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("story").classList.remove("hidden");
};

// Investigate Drinks
document.getElementById("drinkBtn").onclick = function() {
    document.getElementById("story").classList.add("hidden");
    document.getElementById("drinks").classList.remove("hidden");
};

// Check Drink Puzzle
function checkDrink(choice) {
    let result = document.getElementById("result");
    if (choice === 'safe') {
        result.innerText = "You chose wisely. The path continues...";
        result.style.color = "lime";
    } else {
        result.innerText = "The drink was poisoned. Try again!";
        result.style.color = "red";
    }
}

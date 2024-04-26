function handleExploreButtonClick() {
    alert("You clicked Explore Now button!");
    
}

function displayWelcomeMessage() {
    var hasDisplayedWelcomeMessage = localStorage.getItem("hasDisplayedWelcomeMessage");
    if (!hasDisplayedWelcomeMessage) {
        var userName = prompt("Please enter your name:");
        if (userName) {
            alert("Welcome, " + userName + "!");
            localStorage.setItem("hasDisplayedWelcomeMessage", true);
        }
    }
}

function toggleNavMenu() {
    var navItems = document.querySelector(".nav-items");
    navItems.classList.toggle("show");
}

function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        alert("Please fill out all fields in the form.");
        return false;
    }
    return true;
}

document.getElementById("exploreBtn").addEventListener("click", handleExploreButtonClick);

displayWelcomeMessage();

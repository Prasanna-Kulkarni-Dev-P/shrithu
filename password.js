const password = prompt("Enter password:");

if (password === "sunflower") {
    document.getElementById("siteContent").style.display = "block";
} else {
    document.body.innerHTML = "<h1>Access denied</h1>";
}

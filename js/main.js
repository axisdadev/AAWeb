
document.addEventListener("DOMContentLoaded", () => {
    fetch("/nav.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });

    fetch("/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

function showDiscordLogin() {
    alert("Discord login modal would show here.");
}

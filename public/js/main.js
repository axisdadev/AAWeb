document.addEventListener("DOMContentLoaded", () => {
    fetch("/nav.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            initNav(); // <- move this here, after navbar is in the DOM
        });

    fetch("/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px"; // Adjust this value to hide the navbar completely
    }

    prevScrollpos = currentScrollPos;
};

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var main = document.getElementById("main");
    var navToggle = document.getElementById("navToggle");

    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
        main.style.marginLeft = "0";
        navToggle.innerHTML = "☰";
    } else {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        navToggle.innerHTML = "✕";
    }
}
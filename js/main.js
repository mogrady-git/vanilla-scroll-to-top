const arrowBtn = document.getElementById("arrowBtn");

window.onscroll = function() {
    scrollToTop();
}

function scrollToTop() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        // console.log("Scrolled over 700");
        arrowBtn.style.opacity = "1";
        arrowBtn.style.pointerEvents = "auto";
    } else {
        arrowBtn.style.opacity = "0";
        arrowBtn.style.pointerEvents = "none";
    }
}
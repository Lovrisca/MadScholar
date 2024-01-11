// Logo Animation Scroll Down n Up
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scroll down
        document.querySelector('.brand-text').style.transform = 'translateX(-100%)';
    } else {
        // Scroll up
        document.querySelector('.brand-text').style.transform = 'translateX(0)';
    }

    lastScrollTop = st <= 0 ? 0 : st;
});

//Banner Text Animation
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.text-first');

    textElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });

    // Set a timeout to reveal the container after all transitions are done
    setTimeout(() => {
        document.querySelector('.container-typing-text').style.opacity = 1;
    }, textElements.length * 300);
});
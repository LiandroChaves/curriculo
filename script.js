function goToPage(index) {
    const slider = document.getElementById('resumeSlider');
    const btns = document.querySelectorAll('.page-btn');

    // Move the slider
    slider.style.transform = `translateX(-${
        index * 100
    }%)`;

    // Update buttons
    btns.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Script for interactive features
document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".filter-btn");

    // Filter simulation
    filterBtn.addEventListener("click", () => {
        const orderInput = document.querySelector(".input-order").value;
        alert(`Filtering products with minimum order less than: ${orderInput}`);
    });
});

// carousel image

var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})
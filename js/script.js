// Script for adding interactivity (e.g., displaying selected country)
document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector(".search-btn");

    // Simulate search functionality
    searchBtn.addEventListener("click", () => {
        const searchInput = document.querySelector(".search-input").value;
        alert(`Searching for: ${searchInput}`);
    });

    // Change language or country dynamically (optional)
    const countrySpan = document.querySelector(".country");
    countrySpan.addEventListener("click", () => {
        const newCountry = prompt("Enter your country code (e.g., US, FR, MG):", "MG");
        if (newCountry) {
            countrySpan.textContent = newCountry.toUpperCase();
        }
    });
});


// carousol

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carouselExampleDark');
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 2000, // Temps entre les slides
      wrap: true,     // Recommence après le dernier slide
      pause: 'hover', // Pause sur hover
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
  
    const items = carouselInner.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('data-bs-target', '#carouselExampleDark');
      button.setAttribute('data-bs-slide-to', index);
      button.setAttribute('aria-label', `Slide ${index + 1}`);
      if (index === 0) {
        button.classList.add('active');
        button.setAttribute('aria-current', 'true');
      }
      indicatorsContainer.appendChild(button);
    });
  });
    
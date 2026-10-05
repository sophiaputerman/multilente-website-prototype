const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

  const track = document.querySelector('.carousel__track');
  if (track) {
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__btn.next');
  const prevButton = document.querySelector('.carousel__btn.prev');
  let currentSlideIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel); 
  updateCarousel(); 
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.services__container');
    if (!container) return;
    const prevBtn = document.querySelector('.carousel__btn-prev'); 
    const nextBtn = document.querySelector('.carousel__btn-next'); 
    const cardWidth = 300; 
    const gap = 32; 
    // Function to scroll the container
    const scrollCarousel = (direction) => {
        // Calculate the scroll amount based on card width and gap
        const scrollAmount = cardWidth + gap;

        if (direction === 'next') {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth' // Smooth scrolling animation
            });
        } else if (direction === 'prev') {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth' // Smooth scrolling animation
            });
        }
    };

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));

    // Add keyboard navigation 
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            scrollCarousel('prev');
        } else if (event.key === 'ArrowRight') {
            scrollCarousel('next');
        }
    });
});

document.getElementById('searchBtn').onclick = function() {
    document.getElementById('searchModal').classList.add('active');
    document.getElementById('searchInput').focus();
};

document.getElementById('searchModal').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
};

document.getElementById('searchForm').onsubmit = function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    // Map search terms to category URLs
    const categoryMap = {
        // 'monturas': 'categoria-monturas.html',
        // 'cristales': 'categoria-cristales.html',
        'lentes': 'categoria-lentes.html',
        'lentes de contacto': 'categoria-lentes.html',
        'soluciones': 'categoria-soluciones.html',
        'equipos': 'categoria-equipos.html',
        'maquinaria': 'categoria-equipos.html',
        'quirúrgicos': 'categoria-quirurgicos.html'
    };

    for (const key in categoryMap) {
        if (query === key || query.includes(key)) {
            window.location.href = categoryMap[key];
            return;
        }
    }

    window.location.href = `productos.html?search=${encodeURIComponent(query)}`;
};


document.addEventListener('DOMContentLoaded', function() {

  const params = new URLSearchParams(window.location.search);
  const search = params.get('search');
  if (search) {
    const cards = document.querySelectorAll('.producto__card');
    cards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      if (!name.includes(search.toLowerCase())) {
        card.style.display = 'none';
      } else {
        card.style.display = '';
      }
    });
  }
});




let currentIndex = 0;


const slides = [
  {
    image: "assets/images/case1.png",
    title: "AI Refinery: Smarter, faster marketing",
    description: "Accenture’s marketers can focus on more creative, strategic work with AI agents, thanks to a strong digital core that paved the way for agentic architecture.",
    link: "#"
  },
  {
    image: "assets/images/case2.png",
    title: "Powering a cloud-first future",
    description: "We helped a major energy provider migrate to the cloud, enhancing their operational efficiency and ability to innovate.",
    link: "#"
  },
  {
    image: "assets/images/case3.png",
    title: "Reinventing the fan experience",
    description: "Partnering with a major sports league, we used data and AI to create a more personalized and engaging experience for fans.",
    link: "#"
  },
  {
    image: "assets/images/case4.png",
    title: "Sustainable supply chains",
    description: "We transformed a global retailer's supply chain to be more transparent, efficient, and environmentally friendly.",
    link: "#"
  },
  {
    image: "assets/images/case5.png",
    title: "The future of digital banking",
    description: "We collaborated with a leading bank to build a next-generation mobile platform, making banking simpler and more intuitive.",
    link: "#"
  },
  {
    image: "assets/images/case6.png",
    title: "Innovating for healthcare",
    description: "Our solutions are helping healthcare providers deliver better patient outcomes through data-driven insights and technology.",
    link: "#"
  }
];

// Get elements from the DOM
const reviewImage = document.getElementById("review-image");
const carouselTitle = document.getElementById("carousel-title");
const carouselDesc = document.getElementById("carousel-desc");
const carouselLink = document.getElementById("carousel-link");
const carouselIndicator = document.getElementById("carousel-indicator");

function updateCarousel() {
  const currentSlide = slides[currentIndex];

  // Add a fade-out class to start the animation
  reviewImage.classList.add('fade-out');
  carouselTitle.classList.add('fade-out');
  carouselDesc.classList.add('fade-out');

  // Wait for the fade-out animation to finish
  setTimeout(() => {
    // Update the content
    reviewImage.src = currentSlide.image;
    carouselTitle.textContent = currentSlide.title;
    carouselDesc.textContent = currentSlide.description;
    carouselLink.href = currentSlide.link;
    carouselIndicator.textContent = `${currentIndex + 1}/${slides.length}`;

    // Remove fade-out and add fade-in to show the new content
    reviewImage.classList.remove('fade-out');
    carouselTitle.classList.remove('fade-out');
    carouselDesc.classList.remove('fade-out');
  }, 300); // This duration should match your CSS transition time
}


function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}


document.querySelector('.carousel-prev').addEventListener('click', showPrevious);
document.querySelector('.carousel-next').addEventListener('click', showNext);

updateCarousel();

var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   function playVideo() {
//     window.location.href = "https://www.youtube.com/watch?v=NxutOVA7DbI"; // Replace with the actual YouTube link
// }

function playVideo() {
  // Get the video element
  const video = document.getElementById('videoPlayer');
  
  // Set the video source dynamically
  video.src =" https://www.youtube.com/watch?v=NxutOVA7DbI&pp=ygUqdGhlIGJlc3QgbWVkaWNhbCB0ZXN0IGxhYm9yYXRvcnkgc29sdXRpb25z";
  
  // Show the video container
  document.getElementById('videoContainer').style.display = 'block';
  
  // Play the video
  video.play();
  
  // Optionally, hide the play button once the video starts playing
  document.querySelector('.play-button').style.display = 'none';
}

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');
        }
    });
}

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
});

// Show the first testimonial on page load
showTestimonial(currentIndex);




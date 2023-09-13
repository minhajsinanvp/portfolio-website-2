




// navbar scroll

let nav = document.querySelector(".navbar")
let home = document.querySelector(".home-class")
window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        nav.classList.add("nav-body")
        // home.classList.remove("home-class")
        // home.classList.add("home-class-small")
      

    }

    else{
        nav.classList.remove("nav-body");
        // home.classList.remove("home-class-small")
    }
}



// nav hide


document.addEventListener('click', function (event) {
    clsBtn = document.querySelector('.btn-close')
    if (event.target.classList[0] === "nav-link") {
        clsBtn.click()
        
    }    
});


// scrollSpy



// form validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()





//   Animation section

// Function to handle the intersection of the service cards
// Function to handle the intersection of the service cards
// Function to handle the animation of service cards
// Function to handle the animation of service cards
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card) => {
        card.style.animation = 'fade-in 1s ease-in-out'; // Apply the animation
        card.style.opacity = '0'; // Initially set opacity to 0
    });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card) => {
        if (isInViewport(card)) {
            card.style.animationPlayState = 'running';
            card.style.opacity = '1';
        } else {
            card.style.animationPlayState = 'paused';
            card.style.opacity = '0.2';
        }
    });
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);

// Call the initial animation when the page loads
window.addEventListener('load', animateServiceCards);





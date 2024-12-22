document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const enj = document.querySelector('.enj');
    const topButton = document.getElementById('top');
    const bar = document.getElementById('bar');
    const menu = document.getElementById('menu');

    setTimeout(() => {
        navbar.classList.add('visible');
        enj.classList.add('visible');
        topButton.classList.add('visible');
    }, 300);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    bar.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});





//  Our Latest Foods  



function cycleCards() {
    const cardCycleContainer = document.getElementById('card-cycle');
    const cards = cardCycleContainer.getElementsByClassName('carddish');
    cardCycleContainer.appendChild(cards[0]); 
  }
  
  
  function cycleImages() {
    const imageCycleContainer = document.getElementById('image-cycle');
    const images = imageCycleContainer.getElementsByClassName('inst');
    imageCycleContainer.appendChild(images[0]); 
  }
  
  
  setInterval(cycleCards, 3000);  
  setInterval(cycleImages, 3000);  
  
  
  window.addEventListener('load', () => {
    document.querySelector('.lnewcon').style.opacity = 1;
    document.querySelector('.lnewcon').style.transform = 'translateY(0)';
  });
  










// footer 


window.addEventListener('load', () => {
           
    const footer = document.querySelector('footer');
    footer.style.opacity = 0;
    footer.style.transform = 'translateY(30px)';
    footer.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        footer.style.opacity = 1;
        footer.style.transform = 'translateY(0)';
    }, 500); 
});


const footerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            const address = document.querySelector('.address');
            const ftmenu = document.querySelector('.ftmenu');
            const last = document.querySelector('.last');

            address.style.transition = 'transform 1s ease, opacity 1s ease';
            ftmenu.style.transition = 'transform 1s ease, opacity 1s ease';
            last.style.transition = 'transform 1s ease, opacity 1s ease';

            address.style.opacity = 1;
            address.style.transform = 'translateX(0)';

            ftmenu.style.opacity = 1;
            ftmenu.style.transform = 'translateY(0)';

            last.style.opacity = 1;
            last.style.transform = 'translateY(0)';

           
            footerObserver.disconnect();
        }
    });
}, { threshold: 0.2 }); 

footerObserver.observe(document.querySelector('footer'));

document.getElementById('email-form').addEventListener('submit', function (e) {

e.preventDefault();


const email = document.getElementById('email').value;


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


if (emailRegex.test(email)) {
    alert("Email is valid! Submitting form...");
  
} else {
    alert("Please enter a valid email address.");
}
});

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



// menu container 


window.onload = function() {
 
    document.querySelector('.foodmenumaincont').classList.add('fadeIn');
    document.querySelector('.foodmenucard').classList.add('fadeIn');
  
  
    let menuItems = document.querySelectorAll('.menuitems .items');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fadeIn');
        }, index * 300); 
    });
  }








// counter box


 
window.addEventListener('DOMContentLoaded', () => {
  
    const counterbox = document.querySelector('.counterbox');
    setTimeout(() => {
        counterbox.style.opacity = 1;
        counterbox.style.transform = 'translateY(0)';
    }, 500);
  });

// Countdown timer logic
const targetDate = new Date("January 30, 2026 23:59:59").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  if (timeRemaining < 0) {
      clearInterval(timerInterval);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      alert("The countdown is over!");
  }
}
const timerInterval = setInterval(updateTimer, 1000);

updateTimer();



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
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




function updateCartTotals() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;

    cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('input').value);
        const price = parseFloat(item.dataset.price);
        subtotal += quantity * price;
    });

    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function updateItemTotal(cartItem) {
    const price = parseFloat(cartItem.dataset.price);
    const quantity = parseInt(cartItem.querySelector('input').value);
    const total = cartItem.querySelector('.total');
    total.textContent = `$${(price * quantity).toFixed(2)}`;
    updateCartTotals();
}

document.querySelectorAll('.cart-item').forEach(cartItem => {
    const decreaseBtn = cartItem.querySelector('.decrease');
    const increaseBtn = cartItem.querySelector('.increase');
    const inputField = cartItem.querySelector('input');

    decreaseBtn.addEventListener('click', () => {
        let quantity = parseInt(inputField.value);
        if (quantity > 1) {
            quantity--;
            inputField.value = quantity;
            updateItemTotal(cartItem);
        }
    });

    increaseBtn.addEventListener('click', () => {
        let quantity = parseInt(inputField.value);
        quantity++;
        inputField.value = quantity;
        updateItemTotal(cartItem);
    });

    inputField.addEventListener('input', () => {
        if (inputField.value < 1) inputField.value = 1;
        updateItemTotal(cartItem);
    });

    cartItem.querySelector('.remove').addEventListener('click', () => {
        cartItem.remove();
        updateCartTotals();
    });
});


updateCartTotals();













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

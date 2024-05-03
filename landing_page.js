// to move to contacts
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.querySelector('#navbar-btn');
    const orderSection = document.querySelector('.main-review');

    // Check if the button and target section exist in the DOM
    if (contactBtn && orderSection) {
        contactBtn.addEventListener('click', function () {
            // Scroll to the target section with smooth scrolling
            orderSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error('Button or target section not found in the DOM.');
    }
});


// To show order
document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('#order-button');
    const outputParagraph = document.getElementById('order-show');
    let orderCount = 0;

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const paragraph = this.closest('.card').querySelector('.card-title');
            const paragraphText = paragraph.textContent.trim();
            console.log(paragraphText)
            orderCount++;
            console.log(orderCount)
            outputParagraph.textContent = `Your orders are: ${orderCount} and they are ${paragraphText}`;
        });
    });
});

//to show cart
document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('#order-cart');
    const outputParagraph1 = document.getElementById('cart-show');
    let cartCount = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const paragraph1 = this.closest('.card').querySelector('.card-title');
            const paragraphText1 = paragraph1.textContent.trim();
            console.log(paragraphText1)
            cartCount++;
            console.log(cartCount)
            outputParagraph1.textContent = `Your orders in cart are: ${cartCount} and they are ${paragraphText1}`;
        });
    });
});




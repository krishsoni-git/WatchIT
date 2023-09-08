// Example: Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Example: Add a simple image slider for products
const products = document.querySelectorAll('.product'); // Add "product" class to your product listings
let currentProduct = 0;

function showProduct(index) {
    products.forEach((product, i) => {
        product.style.display = i === index ? 'block' : 'none';
    });
}

function nextProduct() {
    currentProduct = (currentProduct + 1) % products.length;
    showProduct(currentProduct);
}

function prevProduct() {
    currentProduct = (currentProduct - 1 + products.length) % products.length;
    showProduct(currentProduct);
}

showProduct(currentProduct);

// Add more JavaScript interactivity as needed

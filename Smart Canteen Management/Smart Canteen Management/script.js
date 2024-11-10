document.querySelectorAll('.add-to-order').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.parentElement;
        const itemName = menuItem.getAttribute('data-name');
        const itemPrice = parseFloat(menuItem.getAttribute('data-price'));

        const orderItem = { name: itemName, price: itemPrice };
        let orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
        orderItems.push(orderItem);
        localStorage.setItem('orderItems', JSON.stringify(orderItems));

        alert(`${itemName} added to your order!`);
    });
});

       
document.getElementById('searchInput').addEventListener('keyup', function() {
    let input = this.value.toLowerCase();
    let menuItems = document.querySelectorAll('.menu-container');

    menuItems.forEach(function(item) {
        let itemName = item.querySelector('.menu-item h3').innerText.toLowerCase();
        if (itemName.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }

    });
    
});



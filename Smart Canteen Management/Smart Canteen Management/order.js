function addItemToOrder(item) {
    orderItems.push(item);
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    updateOrderDisplay();
}
let orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

function updateOrderDisplay() {
    const orderList = document.getElementById('order-list');
    const totalCostDisplay = document.getElementById('total-cost');
    const itemCountDisplay = document.getElementById('item-count'); // Element for item count
    let totalCost = 0;

    orderList.innerHTML = ''; // Clear the current order display

    if (orderItems.length === 0) {
        orderList.innerHTML = '<p>No items in your order yet.</p>';
        totalCostDisplay.textContent = '';
        itemCountDisplay.textContent = 'Item Count: 0'; // Update item count to 0
    } else {
        orderItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - $${item.price}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-item';
            removeButton.setAttribute('data-index', index);
            itemDiv.appendChild(removeButton);

            orderList.appendChild(itemDiv);
            totalCost += parseFloat(item.price);
        });

        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
        itemCountDisplay.textContent = `Item Count: ${orderItems.length}`; // Update item count
    }
}

// Function to add item to the order
function addItemToOrder(item) {
    orderItems.push(item);
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    updateOrderDisplay();
}

// Function to remove item from order
function removeItem(index) {
    orderItems.splice(index, 1);
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    updateOrderDisplay();
}

// Event listener for the order page
document.addEventListener('DOMContentLoaded', () => {
    updateOrderDisplay();

    // Remove item event listener
    document.getElementById('order-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            removeItem(index);
        }
    });

    // Confirm order button event listener
    
    document.getElementById('confirm-order').addEventListener('click', () => {
        if (orderItems.length > 0) {
            // Logic to handle order confirmation
            alert('Order confirmed!');
            orderItems = []; // Clear order
            localStorage.removeItem('orderItems');
            updateOrderDisplay();
        } else {
            alert('Your order is empty!');
        }
    });

 });

// Function to show the feedback modal
function showFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'flex';
}

// Function to confirm the order and then show the feedback modal
function confirmOrder() {
    // Display the feedback modal
    showFeedbackModal();
}

// Function to submit feedback
function submitFeedback() {
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const comments = document.getElementById('comments').value;

    if (rating && comments) {
        // Handle feedback submission logic here
        console.log("Rating:", rating);
        console.log("Comments:", comments);
        
        // Hide feedback modal after submission
        document.getElementById('feedbackModal').style.display = 'none';
        alert("Thank you for your feedback!");
    } else {
        alert("Please provide both a rating and comments.");
    }
}

// Add event listener to the confirm order button
document.getElementById("confirm-order").addEventListener("click", confirmOrder);




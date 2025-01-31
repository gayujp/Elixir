// Example order tracking data
const orders = {
    "123456": {
        status: "Shipped",
        estimatedDelivery: "Oct 20, 2024",
        lastLocation: "New York, NY"
    },
    "121212": {
        status: "Out for Delivery",
        estimatedDelivery: "Oct 14, 2024",
        lastLocation: "Los Angeles, CA"
    },
    "343434": {
        status: "Delivered",
        estimatedDelivery: "Oct 10, 2024",
        lastLocation: "San Francisco, CA"
    }
};

// Form submission event
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const orderNumber = document.getElementById('orderNumber').value.trim();
    const trackingInfo = document.getElementById('trackingInfo');

    if (orders[orderNumber]) {
        const orderData = orders[orderNumber];
        trackingInfo.innerHTML = `
            <p><strong>Status:</strong> ${orderData.status}</p>
            <p><strong>Estimated Delivery:</strong> ${orderData.estimatedDelivery}</p>
            <p><strong>Last Location:</strong> ${orderData.lastLocation}</p>
        `;
        trackingInfo.classList.remove('error');
        trackingInfo.classList.add('success');
    } else {
        trackingInfo.innerHTML = '<p class="error">Order not found. Please check the order number and try again.</p>';
    }

    trackingInfo.style.display = 'block'; // Show tracking info
});
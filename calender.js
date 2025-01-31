// Sample waste pickup schedule data
const pickupSchedule = {
    "2024-10-02": {
        type: "Recyclables",
        pickupTime: "8:00 AM"
    },
    "2024-10-05": {
        type: "General Waste",
        pickupTime: "9:00 AM"
    },
    "2024-10-09": {
        type: "Yard Waste",
        pickupTime: "7:30 AM"
    },
    "2024-10-12": {
        type: "Recyclables",
        pickupTime: "8:30 AM"
    },
    "2024-10-16": {
        type: "E-waste",
        pickupTime: "8:00 AM"
    },
    "2024-10-20": {
        type: "Bio-medical waste",
        pickupTime: "9:00 AM"
    },
    "2024-10-24": {
        type: "plastic",
        pickupTime: "7:30 AM"
    },
    "2024-10-28": {
        type: "News paper",
        pickupTime: "8:30 AM"
    }
};

// Generate a simple calendar for the current month
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); // October for this example

const daysInMonth = new Date(year, month + 1, 0).getDate();
const calendar = document.getElementById('calendar');

// Function to handle date selection
function handleDateClick(date) {
    const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const pickupDetails = document.getElementById('pickupDetails');

    if (pickupSchedule[selectedDate]) {
        const pickupData = pickupSchedule[selectedDate];
        pickupDetails.innerHTML = `
            <p><strong>Pickup Type:</strong> ${pickupData.type}</p>
            <p><strong>Pickup Time:</strong> ${pickupData.pickupTime}</p>
        `;
        pickupDetails.classList.add('success');
        pickupDetails.style.display = 'block';
    } else {
        pickupDetails.innerHTML = `<p class="error">No scheduled pickup for this date.</p>`;
        pickupDetails.style.display = 'block';
    }
}

// Function to generate the calendar
for (let day = 1; day <= daysInMonth; day++) {
    const button = document.createElement('button');
    button.textContent = day;
    button.onclick = () => handleDateClick(day);
    calendar.appendChild(button);
}

// Initial setup: Display nothing in pickup details
document.getElementById('pickupDetails').style.display = 'none';
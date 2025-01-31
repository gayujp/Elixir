// Points Calculation Logic
function calculatePoints() {
    // Get the values from input fields
    let recycled = parseFloat(document.getElementById("recycled").value) || 0;
    let composted = parseFloat(document.getElementById("composted").value) || 0;
    let general = parseFloat(document.getElementById("general").value) || 0;

    // Calculate points: 10 points for each kg of recycled waste, 15 for composted, and 2 for general
    let recycledPoints = recycled * 10;
    let compostedPoints = composted * 15;
    let generalPoints = general * 2;

    // Total points
    let totalPoints = recycledPoints + compostedPoints + generalPoints;

    // Update the total points display
    document.getElementById("totalPoints").textContent = totalPoints;
}
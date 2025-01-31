// Function to calculate quiz score
function calculateScore() {
    let score = 0;

    // Get the selected answers
    let q1 = document.getElementById('q1').value;
    let q2 = document.getElementById('q2').value;
    let q3 = document.getElementById('q3').value;

    // Calculate score based on correct answers
    if (q1 == 1) score++;
    if (q2 == 1) score++;
    if (q3 == 1) score++;

    // Display the score
    document.getElementById('score').textContent = score;
}
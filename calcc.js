// Add event listeners for the form submission (Calculate button)

document.getElementById('calculate1').addEventListener('click', calculateFormula1);
document.getElementById('calculate2').addEventListener('click', calculateFormula2);
document.getElementById('calculate3').addEventListener('click', calculateFormula3);

// Function for the first formula (Example)
function calculateFormula1() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (isNaN(input1) || isNaN(input2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Example calculation for formula 1
    const result = input1 * input2;  // Update based on your actual formula
    document.getElementById('result1').innerText = `Result: ${result}`;
}

// Function for the second formula
function calculateFormula2() {
    const input3 = parseFloat(document.getElementById('input3').value);
    const input4 = parseFloat(document.getElementById('input4').value);

    // Check if inputs are valid numbers
    if (isNaN(input3) || isNaN(input4)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Example calculation for formula 2
    const result = input3 + input4;  // Update based on your actual formula
    document.getElementById('result2').innerText = `Result: ${result}`;
}

// Function for the third formula
function calculateFormula3() {
    const input5 = parseFloat(document.getElementById('input5').value);
    const input6 = parseFloat(document.getElementById('input6').value);

    // Check if inputs are valid numbers
    if (isNaN(input5) || isNaN(input6)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Example calculation for formula 3
    const result = input5 - input6;  // Update based on your actual formula
    document.getElementById('result3').innerText = `Result: ${result}`;
}

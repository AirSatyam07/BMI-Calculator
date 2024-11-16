function calculateBMI(event) {
    event.preventDefault(); // Prevent form submission
    let height = parseFloat(document.getElementById("Height").value);
    const weight = parseFloat(document.getElementById("Weight").value);
    const heightUnit = document.getElementById("heightUnit").value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = `<p>Please enter valid inputs</p>`;
        return;
    }

    // Convert height to cm if in feet
    if (heightUnit === "feet") {
        height = height * 30.48; // Convert feet to centimeters (1 foot = 30.48 cm)
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Correct BMI calculation
    let category;

    // Determine BMI category
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal Weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    // Display result
    document.getElementById("result").innerHTML = `<p>Your BMI is ${bmi} (${category})</p>`;
}

document.querySelector(".bmiForm").addEventListener("submit", calculateBMI);


function clearlog(){
    
        // Clear the input fields
        document.getElementById("Weight").value = "";
        document.getElementById("Height").value = "";
        document.getElementById("heightUnit").value = "cm"; // Reset to default unit (optional)
        
        // Clear the result div
        document.getElementById("result").innerHTML = "Result";
    
    
}
document.querySelector("#clear").addEventListener("click", clearlog)
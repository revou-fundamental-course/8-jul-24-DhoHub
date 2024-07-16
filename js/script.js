// Function to calculate BMI
document.querySelector('.result').style.display = 'none';
function calculateBMI() {
    // Get input values
    var weight = parseFloat(document.getElementById("weightInput").value);
    var height = parseFloat(document.getElementById("heightInput").value) / 100; // Convert height to meters
    var age = parseInt(document.getElementById("ageInput").value);
    var sex = document.querySelector('input[name="sex"]:checked').value;

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display BMI result
    document.getElementById("result").textContent = "BMI: " + bmi.toFixed(2);

    // Determine BMI status
    var status = "";
    if (bmi < 18.5) {
        status = "Anda Kurang Berat Badan";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Berat Badan Anda Normal";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Anda Memiliki Berat Badan Berlebih";
    } else {
        status = "Anda Obesitas.";
    }

    // Display BMI status
    document.getElementById("status").textContent = status;

    // Display associated diseases
    var diseases = "";
    if (bmi < 18.5) {
        diseases = "Kekurangan Berat Badan bisa menyebabkan lemahnya sistem kekebalan tubuh dan gangguan reproduksi.";
    } else if (bmi >= 18.5 && bmi < 25) {
        diseases = "Anda memiliki berat badan yang ideal, terus berolahraga dan makan makanan bergizi.";
    }else if (bmi >= 25 && bmi < 30) {
        diseases = "Berat Badan Berlebih dapat meningkatkan risiko penyakit jantung, diabetes, dan tekanan darah tinggi.";
    } else if (bmi >= 30) {
        diseases = "Obesitas dapat meningkatkan risiko penyakit jantung, stroke, diabetes tipe 2, dan beberapa jenis kanker.";
    } 

    // Display associated diseases
    document.getElementById("diseases").textContent = diseases;

    // Show result container
    document.querySelector(".result").style.display = "flex";
}

// Function to reset form
function resetForm() {
    document.getElementById("weightInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("sex-man").checked = false;
    document.getElementById("sex-women").checked = false;
    document.getElementById("result").textContent = "";
    document.getElementById("status").textContent = "";
    document.getElementById("diseases").textContent = "";
    document.querySelector(".result").style.display = "none";
}

// Event listener for BMI calculation
document.getElementById("calc-button").addEventListener("click", calculateBMI);
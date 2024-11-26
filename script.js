
    function calculateBMI() {
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);

      if (!age || !gender || !weight || !height || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Please fill out all fields correctly!';
        return;
      }

      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      let category = '';

      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24.9) category = 'Normal weight';
      else if (bmi < 29.9) category = 'Overweight';
      else category = 'Obesity';

      document.getElementById('result').innerText = `Age: ${age}, Gender: ${gender}\nYour BMI is ${bmi} (${category})`;
    }
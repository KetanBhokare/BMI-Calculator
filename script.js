function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    alert("Please enter both height and weight.");
    return;
  }

  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  let resultText = "";

  if (bmi < 18.5) {
    resultText = "Underweight";
  } else if (bmi < 25) {
    resultText = "Normal Weight";
  } else if (bmi < 30) {
    resultText = "Overweight";
  } else {
    resultText = "Obese";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Your BMI (Body Mass Index) is ${bmi.toFixed(
    1
  )}. This is considered ${resultText}.`;
}

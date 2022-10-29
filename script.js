function BMI(weight = 69, height = 1.75) {
  let result = weight / (height * height);
  return result;
}

console.log(BMI(81, 1.9));
console.log(BMI());

function Status(BodyMass) {
  let box = document.getElementById("result");

  if (BodyMass < 18.5) {
    box.style.color = "orange";
    return "لديك نقص في الوزن";
  } else if (BodyMass > 18.5 && BodyMass < 25) {
    box.style.color = "green";
    return "وزنك صحي";
  } else if (BodyMass > 25) {
    box.style.color = "red";
    return "لديك زيادة في الوزن";
  }
}
function calculate() {
  let weight = document.getElementById("weight").value;

  let height = document.getElementById("height").value;

  let bmi_value = BMI(weight, height);

  let desc = Status(bmi_value);

  let box = document.getElementById("result");

  box.innerText = bmi_value + " == " + desc;
}

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = '$%&"-_^@!?;.()';
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

// console.log(rangeValue.value);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) {
    data.push(...dataLowercase);
  }
  if (uppercase.checked) {
    data.push(...dataUppercase);
  }
  if (numbers.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }

  if(data.length === 0) {
    alert('Veuillez sélectionner des critéres');
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  // On utilise .value car il s'agit d'un input
  passwordOutput.value = password;
}

generateButton.addEventListener("click", generatePassword);

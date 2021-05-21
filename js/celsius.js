"use strict"

window.onload = function() {
  const convertBtn = document.getElementById("convertBtn");
  convertBtn.onclick = convertBtnClicked;
}
function convertBtnClicked() {
  // Get aconvert input from <input> id field on the HTML 
  const inputTempField = document.getElementById("inputTemp");
  let inputTemp = Number(inputTempField.value);

  let conversion = (inputTemp * 5/9) + 32;

  const conversionField = document.getElementById("conversion");
  conversionField.value = conversion;
}
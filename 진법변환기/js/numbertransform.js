const numForm = document.querySelector("#num-form");
const numInput = document.querySelector("#num-form input");
const num2ResultSpan = document.querySelector("#num2-form span");
const num8ResultSpan = document.querySelector("#num8-form span");
const num16ResultSpan = document.querySelector("#num16-form span");


function onNumInput(event) {
    event.preventDefault();
    const num = numInput.value;
    const num2 = parseInt(num,10).toString(2);
    const num8 = parseInt(num,10).toString(8);
    const num16 = parseInt(num,10).toString(16);
    if (num < 0) {
        alert("너무 작은 숫자입니다.");
        numInput.value = null;
    } else if (num > 100000000) {
        alert("너무 큰 숫자입니다.");
        numInput.value = null;
    } else{
        num2ResultSpan.innerText = num2;
        num8ResultSpan.innerText = num8;
        num16ResultSpan.innerText = num16;
    }
}

numForm.addEventListener("input", onNumInput);
numForm.addEventListener("submit", onNumInput);

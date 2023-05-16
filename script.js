function conversorTempC() {
    var celsius = parseFloat(prompt('Digite a Temp em Celsius'));

    var CtoF = ((celsius * 1.8) + 32);
    var CtoK = (celsius + 273.15);

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = 'Sua temp em F é ' + CtoF + '<br>' +
        'Sua temp em K é ' + CtoK;

    var body = document.body;
    if (celsius >= 30) {
        body.style.backgroundColor = "red";
    } else if (celsius <= 20) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "white";
    }
}

function conversorTempF() {
    var fahrenheit = parseFloat(prompt('Digite a Temp em Fahrenheit'));

    var FtoC = ((fahrenheit - 32) * 5 / 9);
    var FtoK = (((fahrenheit - 32) * 5 / 9) + 273.15);

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = 'Sua temp em C é ' + FtoC + '<br>' +
        'Sua temp em K é ' + FtoK;

    var body = document.body;
    if (FtoC >= 30) {
        body.style.backgroundColor = "red";
    } else if (FtoC <= 20) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "white";
    }
}

function conversorTempK() {
    var kelvin = parseFloat(prompt('Digite a Temp em Kelvin'));

    var KtoC = Math.ceil(kelvin - 273.15);
    var KtoF = Math.ceil(((kelvin - 273.15) * 1.8) + 32);

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = 'Sua temp em C é ' + KtoC + '<br>' +
        'Sua temp em F é ' + KtoF;

    var body = document.body;
    if (KtoC >= 30) {
        body.style.backgroundColor = "red";
    } else if (KtoC <= 20) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "white";
    }
}

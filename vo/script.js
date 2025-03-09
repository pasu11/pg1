function calculateWatt() {  
    const voltage = document.getElementById('voltage1').value;  
    const amp = document.getElementById('amp1').value;  
    const wattField = document.getElementById('watt1');  

    if (voltage && amp) {  
        wattField.value = (voltage * amp).toFixed(2);  
    } else {  
        wattField.value = '';  
    }  
}  

function calculateVoltage() {  
    const amp = document.getElementById('amp2').value;  
    const watt = document.getElementById('watt2').value;  
    const voltageField = document.getElementById('voltage2');  

    if (amp && watt) {  
        voltageField.value = (watt / amp).toFixed(2);  
    } else {  
        voltageField.value = '';  
    }  
}  

function calculateAmp() {  
    const voltage = document.getElementById('voltage3').value;  
    const watt = document.getElementById('watt3').value;  
    const ampField = document.getElementById('amp3');  

    if (voltage && watt) {  
        ampField.value = (watt / voltage).toFixed(2);  
    } else {  
        ampField.value = '';  
    }  
}  

function resetInputs1() {  
    document.getElementById('voltage1').value = '';  
    document.getElementById('amp1').value = '';  
    document.getElementById('watt1').value = ''; // This can remain disabled, but just in case  
}  

function resetInputs2() {  
    document.getElementById('voltage2').value = '';  
    document.getElementById('amp2').value = '';  
    document.getElementById('watt2').value = ''; // This can remain disabled, but just in case  
}  

function resetInputs3() {  
    document.getElementById('voltage3').value = '';  
    document.getElementById('amp3').value = '';  
    document.getElementById('watt3').value = ''; // This can remain disabled, but just in case  
}  

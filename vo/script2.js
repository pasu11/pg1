document.addEventListener("DOMContentLoaded", function() {  
    const voltageInput = document.getElementById("voltageInput");  
    const currentInput = document.getElementById("currentInput");  
    const voltageSlider = document.getElementById("voltageSlider");  
    const currentSlider = document.getElementById("currentSlider");  
    const voltageOutput = document.getElementById("voltageOutput");  
    const voltageOutput2 = document.getElementById("voltageOutput2");  // New Element  
    const currentOutput = document.getElementById("currentOutput");  
    const currentOutput2 = document.getElementById("currentOutput2");  // New Element  
    const wattageOutput = document.getElementById("wattageOutput");  
    const wattageOutput2 = document.getElementById("wattageOutput2");  // New Element  
    const resetButton = document.getElementById("resetButton");  

    const maxVoltage = 120;  
    const maxCurrent = 20;  

    let voltage = parseFloat(voltageInput.value);  
    let current = parseFloat(currentInput.value);  
    let power = voltage * current;  

    const setSliderMaxValues = () => {  
        voltageSlider.max = maxVoltage;  
        currentSlider.max = maxCurrent;  
    };  

    const setInitialValues = () => {  
        voltageSlider.value = voltage;  
        currentSlider.value = current;  
        voltageSlider.step = 0.1;  
        currentSlider.step = 0.01;  
        setSliderMaxValues();  
    };  

    const updateDisplay = () => {  
        voltageOutput.textContent = voltage.toFixed(2) + " V";  
        voltageOutput2.textContent = voltage.toFixed(2) + " V";  // Update voltageOutput2  
        currentOutput.textContent = current.toFixed(2) + " A";  
        currentOutput2.textContent = (current * 0.85).toFixed(2) + " A";  // Update currentOutput2  
        wattageOutput.textContent = "Total Power: " + (voltage * current).toFixed(2) + " W";  
        wattageOutput2.textContent = "Total Power: " + (voltage * (current * 0.85)).toFixed(2) + " W";  // Update wattageOutput2  
        voltageSlider.value = voltage;  
        currentSlider.value = current;  
    };  

    const recalculateCurrent = () => {  
        current = power / voltage;  
        if (current > maxCurrent) {  
            current = maxCurrent;  
            voltage = power / current;  
        }  
        updateDisplay();  
    };  

    const recalculateVoltage = () => {  
        voltage = power / current;  
        if (voltage > maxVoltage) {  
            voltage = maxVoltage;  
            current = power / voltage;  
        }  
        updateDisplay();  
    };  

    voltageSlider.addEventListener("input", function() {  
        voltage = parseFloat(this.value);  
        recalculateCurrent();  
    });  

    currentSlider.addEventListener("input", function() {  
        current = parseFloat(this.value);  
        recalculateVoltage();  
    });  

    voltageInput.addEventListener("change", function() {  
        voltage = parseFloat(this.value);  
        power = voltage * current;  
        setSliderMaxValues();  
        updateDisplay();  
    });  

    currentInput.addEventListener("change", function() {  
        current = parseFloat(this.value);  
        power = voltage * current;  
        setSliderMaxValues();  
        updateDisplay();  
    });  

    // Reset function  
    const resetInputs = () => {  
        voltage = 0;  
        current = 0;  
        power = 0;  
        voltageInput.value = voltage;  
        currentInput.value = current;  
        updateDisplay();  
    };  

    resetButton.addEventListener("click", resetInputs);  

    setInitialValues();  
    updateDisplay();  
});

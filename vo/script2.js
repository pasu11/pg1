document.addEventListener("DOMContentLoaded", function() {  
    const voltageInput = document.getElementById("voltageInput");  
    const currentInput = document.getElementById("currentInput");  
    const voltageSlider = document.getElementById("voltageSlider");  
    const currentSlider = document.getElementById("currentSlider");  
    const voltageOutput = document.getElementById("voltageOutput");  
    const currentOutput = document.getElementById("currentOutput");  
    const wattageOutput = document.getElementById("wattageOutput");  
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
        currentOutput.textContent = current.toFixed(2) + " A";  
        wattageOutput.textContent = "Total Power: " + (voltage * current).toFixed(2) + " W";  
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

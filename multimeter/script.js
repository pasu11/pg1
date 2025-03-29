function calculate() {  
    const range = parseFloat(document.getElementById('range').value);  
    const accuracyPercent = parseFloat(document.getElementById('accuracy-percent').value) / 100;  
    const accuracyDigit = parseFloat(document.getElementById('accuracy-digit').value);  
    const multimeterInput = parseFloat(document.getElementById('multimeter-input').value);  
    const multimeterOutput = parseFloat(document.getElementById('multimeter-output').value);  

    const input = multimeterInput || multimeterOutput;  

    // Calculate tolerances  
    const tolerancePercent = input * accuracyPercent;  
    const toleranceDigit = range * accuracyDigit;  
    const totalTolerance = tolerancePercent + toleranceDigit;  

    // Determine decimal places based on selected range  
    let decimalPlaces;  
    switch (range) {  
        case 0.001: decimalPlaces = 3; break;  
        case 0.01: decimalPlaces = 2; break;  
        case 0.1: decimalPlaces = 1; break;  
        default: decimalPlaces = 2;  
    }  

    // Calculate min and max values  
    const minValue = input - totalTolerance;  
    const maxValue = input + totalTolerance;  

    // Display results  
    document.getElementById('tolerance-percent').value = tolerancePercent.toFixed(decimalPlaces);  
    document.getElementById('tolerance-digit').value = toleranceDigit.toFixed(decimalPlaces);  
    document.getElementById('total-tolerance').value = totalTolerance.toFixed(decimalPlaces);  
    document.getElementById('min-value').value = minValue.toFixed(decimalPlaces);  
    document.getElementById('max-value').value = maxValue.toFixed(decimalPlaces);  
}  

function resetForm() {  
    document.getElementById('calculator').reset();  
    // Clear readonly fields  
    document.getElementById('tolerance-percent').value = '';  
    document.getElementById('tolerance-digit').value = '';  
    document.getElementById('total-tolerance').value = '';  
    document.getElementById('min-value').value = '';  
    document.getElementById('max-value').value = '';  
}  

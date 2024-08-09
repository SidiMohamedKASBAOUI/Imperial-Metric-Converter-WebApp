function ConvertHandler() {
  
  this.getNum = function(input) {
    let result; 
    let match = input.input.match(/^(\d+(\.\d+)?(\/\d+(\.\d+)?)?)?/);

    if (!match[0]) {
      return 1;
    }

    result = match[0];

    if (input.input.includes('//')) {
      return 'Invalid number';
    }

    if (input.input.includes('/')) {
      let parts = input.input.split('/');
      if (parts.length > 2) {
        return 'Invalid number'; // Double-fraction case ( separated )
      }
      result = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      result = parseFloat(result); // Regular number or decimal
    }

    
    return result;
  };
  
  
  this.getUnit = function(input) {
    let result = "Invalid unit"; 
    const temp = input.input.match(/[a-zA-Z]/g).join('');
    const normalizedinitUnit = temp.toLowerCase(); 
    switch(normalizedinitUnit){
      case "mi": 
        result = "mi"; 
        break; 
      case "km": 
        result="km"; 
        break; 
      case "gal": 
        result = "gal"; 
        break; 
      case "l": 
        result = "L"; 
        break; 
      case "kg": 
        result = "kg"; 
        break; 
      case "lbs": 
        result = "lbs"; 
        break; 
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = "Invalid unit";
    const normalizedinitUnit = initUnit.toLowerCase(); 
    switch(normalizedinitUnit){
      case "mi": 
        result = "km"; 
        break; 
      case "km": 
        result="mi"; 
        break; 
      case "gal": 
        result = "L"; 
        break; 
      case "l": 
        result = "gal"; 
        break; 
      case "kg": 
        result = "lbs"; 
        break; 
      case "lbs": 
        result = "kg"; 
        break; 
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = "Invalid input";
    const normalizedinitUnit = unit.toLowerCase();
    switch(normalizedinitUnit){
      case "mi": 
        result = "miles"; 
        break; 
      case "km": 
        result="kilometers"; 
        break; 
      case "gal": 
        result = "gallons"; 
        break; 
      case "l": 
        result = "liters"; 
        break; 
      case "kg": 
        result = "kilograms"; 
        break; 
      case "lbs": 
        result = "pounds"; 
        break; 
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = 0;
    const normalizedinitUnit = initUnit.toLowerCase();
    switch(normalizedinitUnit){
      case "mi": 
        result = initNum*miToKm; 
        break; 
      case "km": 
        result=initNum/miToKm; 
        break; 
      case "gal": 
        result = initNum*galToL; 
        break; 
      case "l": 
        result = initNum/galToL; 
        break; 
      case "kg": 
        result = initNum/lbsToKg; 
        break; 
      case "lbs": 
        result = initNum*lbsToKg; 
        break;
    }


    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`; 
    
    return result;
  };
  
}

module.exports = ConvertHandler;

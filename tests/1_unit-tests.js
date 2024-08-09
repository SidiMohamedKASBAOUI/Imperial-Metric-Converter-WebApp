const chai = require('chai');
let assert = chai.assert;

const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    let convertHandler = new ConvertHandler();

    suite('Function convertHandler.getNum(input)', ()=>{
        // #1 Correctly reads a whole number input
        test('Correctly reads a whole number input', ()=>{
            let input = {input :'32gal'}; 
            assert.equal(convertHandler.getNum(input), 32, 'equals the whole number');
        })
        test('Correctly reads a decimal number input', ()=>{
            let input = {input :'32.5gal'}; 
            assert.equal(convertHandler.getNum(input), 32.5, 'equals the decimal number');
        })
        test('Correctly reads a fraction number input', ()=>{
            let input = {input :'3/2gal'}; 
            assert.equal(convertHandler.getNum(input), 3/2, 'equals the fraction number');
        })
        test('Correctly reads a fractional input with a decimal', ()=>{
            let input = {input :'3.2/4gal'}; 
            assert.equal(convertHandler.getNum(input), 3.2/4, 'equals the decimal number');
        })
        test('Correctly returns an error on a double fraction', ()=>{
            let input = {input :'3/2/2gal'}; 
            assert.equal(convertHandler.getNum(input), 'Invalid number', 'equals the decimal number');
        })
        test('Correctly defaults to 1 if input is empty', ()=>{
            let input = {input :'gal'}; 
            assert.equal(convertHandler.getNum(input), 1, 'equals the decimal number');
        })
    })

    suite('Function converHandler.getUnit(input)', ()=>{
        test('Correctly reads each valid input', ()=>{
            let input = {input :'32L'}; 
            assert.equal(convertHandler.getUnit(input), 'L')
        })
        test('Correctly returns error if invalid input', ()=>{
            let input = {input :'32Lagoons'}; 
            assert.equal(convertHandler.getUnit(input), 'Invalid unit')
        })
        
    })
    suite('Function converHandler.getReturnUnit(input)', ()=>{
        test('Correctly returns the return unit', ()=>{
            let input = 'L'; 
            assert.equal(convertHandler.getReturnUnit(input), 'gal')
        })
    })
    suite('Function converHandler.spellOutUnit(input)', ()=>{
        test('Correctly returns the spelled out unit', ()=>{
            let input = 'L'; 
            assert.equal(convertHandler.spellOutUnit(input), 'liters')
        })
    })
    suite('Function converHandler.convert(input)', ()=>{
        test('L to gal', ()=>{
            let inputN = '5';
            let inputU = 'L' 
            assert.approximately(convertHandler.convert(inputN,inputU), inputN/3.78541, 0.00001)
        })
        test('gal to L', ()=>{
            let inputN = '5';
            let inputU = 'gal' 
            assert.approximately(convertHandler.convert(inputN,inputU), inputN*3.78541, 0.00001)
        })
        test('mi to km', ()=>{
            let inputN = '5';
            let inputU = 'mi' 
            assert.approximately(convertHandler.convert(inputN,inputU), inputN*1.60934, 0.00001)
        })
        test('km to mi', ()=>{
            let inputN = '5';
            let inputU = 'km' 
            assert.approximately(convertHandler.convert(inputN,inputU), inputN/1.60934, 0.00001)
        })
        test('lbs to kg', ()=>{
            let inputN = '5';
            let inputU = 'lbs' 
            assert.approximately(convertHandler.convert(inputN,inputU), inputN*0.453592, 0.00001)
        })
        test('kg to lbs', ()=>{
            let inputN = '5';
            let inputU = 'kg' 
            assert.approximately(convertHandler.convert(inputN,inputU), inputN/0.453592, 0.00001)
        })
    })
    
});
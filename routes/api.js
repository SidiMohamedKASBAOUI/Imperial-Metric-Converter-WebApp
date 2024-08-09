'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req, res)=>{
    let input = req.query;
     //console.log(req.query);
     
  // console.log(convertHandler.getNum(input)); // confirm number input 
  // console.log(convertHandler.getUnit(input)); // confirm unit input 
  // console.log(convertHandler.getReturnUnit(convertHandler.getUnit(input))); // confirm return unit 
  // console.log(convertHandler.spellOutUnit(convertHandler.getUnit(input))); //confirm spelling
  // console.log(convertHandler.convert(convertHandler.getNum(input),convertHandler.getUnit(input))); // confirm conversion
  let initNum = convertHandler.getNum(input); 
  let initUnit = convertHandler.getUnit(input); 
  let initUnitS = convertHandler.spellOutUnit(convertHandler.getUnit(input));
  let returnNum = convertHandler.convert(convertHandler.getNum(input),convertHandler.getUnit(input));
  let returnUnit = convertHandler.getReturnUnit(convertHandler.getUnit(input));
  let returnUnitS = convertHandler.spellOutUnit(convertHandler.getReturnUnit(convertHandler.getUnit(input))); 
  //console.log(initUnit);
  //console.log(convertHandler.getString(inum, iunit, rnum, runit)); 
  if(initNum === 'Invalid number' && initUnit == 'Invalid unit'){res.json("invalid number and unit")}
  else if(initNum === 'Invalid number'){res.json('invalid number')}
  else if(initUnit === 'Invalid unit'){res.json('invalid unit')}
  else{
  let getString = convertHandler.getString(initNum, initUnitS, returnNum, returnUnitS);
  res.json({
    initNum,
    initUnit,
    returnNum,
    returnUnit,
    string:getString
  })
}
})
  //console.log(input);
};
// convertHandler.spellOutUnit(convertHandler.getReturnUnit(convertHandler.getUnit(input)))
// convertHandler.convert(convertHandler.getNum(input))
//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
 var numberOfLargeBarrel = ((total - (small*60))/large);
 return numberOfLargeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
  var earthCircum = 24901;
  var gallonsOfFuel = earthCircum/milesPerGallon;
  var totalFuelCost = gallonsOfFuel * fuelPrice;
  return totalFuelCost;
};

//*************************
// Problem 3:
// GROG
// a = gallons costco juice
// b = percent pure fruit juice of costco 
//c = gallons kirkland juice
// d = percent pure kirkland juice
var calcFruitJuice = function(a, b, c, d){
  //your code here
var totalAmountPureFruitJuice = (a*(b/100)) + (c*(d/100));
var totalAmountOfJuice = a + c

var totalPercent = totalAmountPureFruitJuice/totalAmountOfJuice;

return totalPercent;

};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};

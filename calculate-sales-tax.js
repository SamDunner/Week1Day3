
function calculateSalesTax(sales, taxRates) {
  var results = {
    //one key per company
    };

  for (var salesIndex in sales) {
    var companyData = sales[salesIndex];
    if (!results[companyData.name]) {
      // set it
      results[companyData.name] = {};
      var total = 0;
      for (var monthlySalesIndex in companyData["sales"]) { //quotes for sales and period (like below) have the same function.
        //var numbers = {};
        //var numbersData = companyData[monthlyData];
        //results[companyData.sales] = numbers;
        //else {

          //add the sales to the company's other total
       // }
        total += companyData.sales[monthlySalesIndex];
        //console.log(monthlyData + numbersData);
      }
      //console.log(salesIndex + companyData);
      //console.log(Object.keys(companyData));
      results[companyData.name].totalSales = total;
      results[companyData.name].totalTaxes = taxRates[companyData.province] * total;


    } else {
      // add to it
      //total the sales

      var total = 0;
      for (var monthlySalesIndex in companyData["sales"]) {
      total += companyData.sales[monthlySalesIndex];
    }
      results[companyData.name].totalSales += total;
      results[companyData.name].totalTaxes += taxRates[companyData.province] * total;


    }


  }
  //console.log(numbers);
console.log(results);
  // for (var data in taxRates) {
  //   var taxData = taxRates[data];
  //     console.log(data + taxData);
  // }
}
///next steps: write a for loop within a for loop, where we take the sales data, make sure to do the undefined stuff
var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
calculateSalesTax(companySalesData, taxRates)
// var results = calculateSalesTax(salesData, salesTaxRates);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
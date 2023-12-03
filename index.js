console.log("JS file added")

// Get the capital, interest and year input element
let capital = document.getElementById('capital');
let interest = document.getElementById('interest');
let year = document.getElementById('year');

// Get the invested & returned amount element
let invested = document.getElementById('investedAmount');
let returns = document.getElementById('totalReturns')
let returnAmount = document.getElementById('futureValue');


function calculateInterest() {
   
    // Get the capital, interest and year input element value
    let principleAmount = capital.value;
    let interestRate = interest.value / 100;
    let yearValue = year.value;

    // calculate simple interest
    let futureValue = principleAmount * ((1 + interestRate) ** yearValue);
    // console.log(`simple Interest: ${simpleInterest}`);

    // total amount after calculation
    let totalamout = Math.round(futureValue)

    // total retunrn in your priciple amount
    let totalReturns = totalamout - parseFloat(principleAmount);

    // change the text of invested and returned amount element
    invested.innerText = `You have Invested: ${principleAmount}$`
    returns.innerText = `You will get Total return ${totalReturns}$`
    returnAmount.innerText = `After ${yearValue} year, You will get: ${totalamout}$`
    
}
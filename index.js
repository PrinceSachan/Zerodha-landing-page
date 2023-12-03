console.log("JS file added")

// Get the capital, interest and year input element
let capital = document.getElementById('capital');
let interest = document.getElementById('interest');
let year = document.getElementById('year');

// Get the invested & returned amount element
let invested = document.getElementById('investedAmount')
let returnAmount = document.getElementById('returnedAmount');


function calculateInterest() {
   
    // Get the capital, interest and year input element value
    let capitalValue = capital.value;
    let interestValue = interest.value;
    let yearValue = year.value;

    // calculate simple interest
    let simpleInterest = (capitalValue * interestValue * yearValue) / 100;
    // console.log(`simple Interest: ${simpleInterest}`);

    // total amount after the interest
    let totalamout = parseFloat(capitalValue) + simpleInterest;

    // change the text of invested and returned amount element
    invested.innerText = `You have Invested: ${capitalValue}$`
    returnAmount.innerText = `After ${yearValue} year, You will get: ${totalamout}$`
    
}
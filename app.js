const initialPrice = document.querySelector("#initial-price")
const numberStock = document.querySelector("#number-stocks")
const currentPrice = document.querySelector("#current-price")
const btnCalculate = document.querySelector(".btn-calculate")
const outputDiv = document.querySelector(".output")

btnCalculate.addEventListener("click", clickHandler);

function clickHandler(e) {
    e.preventDefault();
    var ip = Number(initialPrice.value)
    var qty = Number(numberStock.value)
    var sp = Number(currentPrice.value)

    if (ip === 0 || ip <0 || qty === 0 || qty < 0 ||
         sp === 0 || sp < 0 ) {
        showMessageError("fields cannot be empty or less than zero")
    } else {
        calculateProfitAndLoss(ip, qty, sp)
    }
}





function calculateProfitAndLoss(initialPrice, numberStock, currentPrice) {

    // var ip = Number(initialPrice.value)
    // var qty = Number(numberStock.value)
    // var sp = Number(currentPrice.value)


    if (currentPrice > initialPrice) {
        var profit = (currentPrice - initialPrice) * numberStock;
        var profitPercentage = ((currentPrice - initialPrice) / initialPrice) * 100;


        showMessage(`hey you made a profit of ${profit.toFixed(2)} and the percentage is ${profitPercentage.toFixed(2)} %`)

    } else if (initialPrice > currentPrice) {
        var loss = (initialPrice - currentPrice) * numberStock;


        var lossPercentage = ((initialPrice - currentPrice) / initialPrice) * 100;

        showMessage(`hey you made a loss of ${loss.toFixed(2)} and the percentage is ${lossPercentage.toFixed(2)} %`)

    }
    
    else {
        showMessage("You have made no profit or loss")
    }


}


function showMessage(message) {
    outputDiv.innerHTML = message;
    outputDiv.style.color = "#1091BC";
    outputDiv.style.fontWeight = "bold"
}

function showMessageError(message){
    outputDiv.innerHTML = message;
    outputDiv.style.color = "red"
    outputDiv.style.fontWeight = "bold"
}


































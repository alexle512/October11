let textBox = document.getElementById("stockQuotes")
let stocksList = document.getElementById("container")
let viewAllButton = document.getElementById("viewAllButton")
let stockName = document.getElementById("stockName")
let stockPrice = document.getElementById("stockPrice")


viewAllButton.addEventListener("click",function(e){
    
    let symbol = textBox.value
    let stock = getStockQuote(symbol) 
    stockName.textContent = stock.name
    stockPrice.textContent = stock.price
    console.log(stock)
    
    let interval = setInterval(function(){
    
    }, 3000)
   
})




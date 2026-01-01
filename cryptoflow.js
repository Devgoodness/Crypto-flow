
/*
var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    consolelog(response);
}) */


function getPrices() {
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
    .then(res => res.json())
    .then(data => {
      document.getElementById("btc-price").textContent = data.bitcoin.usd;
      document.getElementById("eth-price").textContent = data.ethereum.usd;
    })
    .catch(err => console.error(err));
}

// run every 5 seconds
setInterval(getPrices, 5000);

// run immediately on load
getPrices();

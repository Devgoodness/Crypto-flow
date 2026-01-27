
fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana,usdt&vs_currencies=usd&include_24hr_change=true"
)
  .then(response => response.json())
  .then(data => {

    setData("btc-price", "btc-change", data.bitcoin.usd, data.bitcoin.usd_24h_change);
    setData("eth-price", "eth-change", data.ethereum.usd, data.ethereum.usd_24h_change);
    setData("doge-price", "doge-change", data.dogecoin.usd, data.dogecoin.usd_24h_change);
    setData("sol-price", "sol-change", data.solana.usd, data.solana.usd_24h_change);
  });

function setData(priceId, changeId, price, change) {
  const priceEl = document.getElementById(priceId);
  const changeEl = document.getElementById(changeId);

  priceEl.textContent = price.toLocaleString();
  changeEl.textContent = change.toFixed(2) + "%";

  changeEl.style.color = change < 0 ? "red" : "green";
}
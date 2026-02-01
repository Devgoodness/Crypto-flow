
fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana,usdt&vs_currencies=usd&include_24hr_change=true"
)
  .then(response => response.json())
  .then(data => {


  });

function setData(priceId, changeId, price, change) {
  const priceEl = document.getElementById(priceId);
  const changeEl = document.getElementById(changeId);

  priceEl.textContent = price.toLocaleString();
  changeEl.textContent = change.toFixed(2) + "%";

  changeEl.style.color = change < 0 ? "red" : "green";
}
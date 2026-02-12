
fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana,usdt&vs_currencies=usd&include_24hr_change=true"
)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });


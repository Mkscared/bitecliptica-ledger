// CoinGecko Price API
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(res => res.json())
  .then(data => {
    document.getElementById('crypto-prices').innerText =
      'Bitcoin Price: $' + data.bitcoin.usd;
  });

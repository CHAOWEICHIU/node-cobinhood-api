
# Node API
This project is designed to help you make your own projects that interact with the [COBINHOOD API](https://cobinhood.github.io/api-public/). You can stream candlestick chart data, market depth, or use other advanced features such as setting stop losses and iceberg orders.

# Get Started
```js
const COBINHOOD = require('node-cobinhood-api')
const cobinhood = new COBINHOOD({})
```

```js
cobinhood.prices({ pairs: ['ETH-BTC'] })
```
<details>
<summary>View Response</summary>
  
```js
{
  "trading_pair_id": "ETH-BTC",
  "timestamp": 1538094000000,
  "24h_high": "0.034688",
  "24h_low": "0.032673",
  "24h_open": "0.033491",
  "24h_volume": "4651.941212669999",
  "last_trade_price": "0.034346",
  "highest_bid": "0.034317",
  "lowest_ask": "0.034438"
}
```

</details>

  
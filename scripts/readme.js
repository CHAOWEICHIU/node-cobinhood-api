const fs = require('fs')


const README = `
# Node Binance API
This project is designed to help you make your own projects that interact with the [Binance API](https://github.com/binance-exchange/binance-official-api-docs). You can stream candlestick chart data, market depth, or use other advanced features such as setting stop losses and iceberg orders. This project seeks to have complete API coverage including WebSockets.
`

fs.writeFile('../README.md', README)

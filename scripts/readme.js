const fs = require('fs')
const fetch = require('node-fetch')
const COBINHOOD = require('../src/index')

const cobinhood = new COBINHOOD({})

const README_LOCATION = './README.md'

const fetchPrices = cobinhood.prices({ pairs: ['ETH-BTC'] })

Promise
.all([
  fetchPrices,
])
.then(([prices]) => {
  const README = `
# Node API
This project is designed to help you make your own projects that interact with the [COBINHOOD API](https://cobinhood.github.io/api-public/). You can stream candlestick chart data, market depth, or use other advanced features such as setting stop losses and iceberg orders.

\`\`\`js
cobinhood.prices({ pairs: ['ETH-BTC'] })
\`\`\`
<details>
<summary>View Response</summary>
  
\`\`\`js
${JSON.stringify(prices, null, 2)}
\`\`\`

</details>

  `

  console.log(README);
  



  fs.unlinkSync(README_LOCATION)
  fs.writeFileSync(README_LOCATION, README, 'utf8')
  
})





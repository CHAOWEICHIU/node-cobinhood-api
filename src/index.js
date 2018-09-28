const fetch = require('node-fetch')
const { find } = require('lodash')

class Cobinhood {
  constructor({ options }) {
    this.options = options
    this.prices = this.prices
  }
  prices({ pairs }) {
    return fetch('https://api.cobinhood.com/v1/market/tickers')
      .then(res => res.json())
      .then(res => res.result.tickers)
      .then(tickers => {
        return pairs.length === 1
          ? find(tickers, { trading_pair_id: pairs[0] })
          : tickers
      }
        
      )
  }
}

module.exports = Cobinhood

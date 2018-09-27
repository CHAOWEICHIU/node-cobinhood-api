const Cobinhood = require('./')

const cobinhood = new Cobinhood({
  options: {},
});

describe('Cobinhood instance', () => {
  it('would have default option', () => {
    console.log(cobinhood);
    cobinhood.prices(['ETH-BTC'], (err, res) => {
      console.log('res', res);
    })
    
  })
  
  
})

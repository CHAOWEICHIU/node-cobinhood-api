const Cobinhood = require('./')

const cobinhood = new Cobinhood({
  options: {},
});

describe('Cobinhood instance', () => {
  it('would have default option', () => {
    console.log(cobinhood);
    cobinhood
    .prices({ pairs: ['ETH-BTC'] })
    .then(res => {
      console.log(res);
      
    })
    
    
  })
  
  
})

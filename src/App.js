import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('$');
  const [inputValue2, setInputValue2] = useState('$');
  const [inputValue3, setInputValue3] = useState('$');

  const [purchase_price, setPurchase_price] = useState(0);
  const [sale_price, setSale_price] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [type, setType] = useState('short');
  const [annual, setAnnual] = useState(0);

  const handleInputChangePurchase = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    setPurchase_price(numericValue);
    setInputValue('$ ' + numericValue);
  };
  const handleInputChangeSale = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    setSale_price(numericValue);
    setInputValue2('$ ' + numericValue);
  };

  const handleInputChangeExpenses = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    setExpenses(numericValue);
    setInputValue3('$ ' + numericValue);
  };

  const tickCSS = { color: '#0141CF', border: '1px solid #0141CF' };

  const taxRate = [
    '0%',
    'Nil + 19% of excess over $18,200',
    '$5,092 + 32.5% of excess over $45,000',
    '$29,467 + 37% of excess over $120,000',
    '$51,667 + 45% of excess over $180,000',
  ]

  const taxCalculate=()=>{
    const gains= type == 'long'? 0.5 * (sale_price - expenses - purchase_price) : (sale_price - expenses - purchase_price);
    if(annual==0) return 0*(gains)/100;
    else if(annual==1) return 19*(gains)/100;
    else if(annual==2) return 32.5*(gains)/100;
    else if(annual==3) return 37*(gains)/100;
    else if(annual==4) return 45*(gains)/100;
  }

  return (
    <div className="calculator">
      <div className='heading'>
        <p>Free Crypto Tax Calculator Australia</p>
      </div>

      <div className='row'>
        <div className='left'>
          <div id='text'>
            <p>Financial Year</p>
          </div>
          <div id='block-div'>
            <select id='block' disabled>
              <option value="nil" >FY 2023-24</option>
            </select>
          </div>
        </div>
        <div className='right'>
          <div id='text'>
            <p>Country</p>
          </div>
          <div id='block-div'>
            <select id='block' disabled>
              <option value="nil">Australia</option>
            </select>
          </div>
        </div>
      </div>

      <div className='row'>
        <div id='line'></div>
      </div>

      <div className='row2'>
        <div className='left'>
          <div id='text'>
            <p>Enter purchase price of Crypto</p>
          </div>
          <div id='block-div'>
            <input
              id='block'
              type="text"
              value={inputValue}
              onChange={handleInputChangePurchase}
            />
          </div>
        </div>
        <div className='right'>
          <div className='inner-right'>
            <div id='text'>
              <p>Enter sale price of Crypto</p>
            </div>
            <div id='block-div'>
              <input
                id='block'
                type="text"
                value={inputValue2}
                onChange={handleInputChangeSale}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='row2'>
        <div className='left'>
          <div id='text'>
            <p>Enter your Expenses</p>
          </div>
          <div id='block-div'>
            <input
              id='block'
              type="text"
              value={inputValue3}
              onChange={handleInputChangeExpenses}
            />
          </div>
        </div>
        <div className='right'>
          <div className='inner-right'>
            <div id='text'>
              <p>Investment Type</p>
            </div>
            <div id='block-div'>
              <div id='select-box' style={type == 'short' ? tickCSS : null} onClick={() => { setType('short'); }}>
                <p>Short Term {type == 'short' ? <p id='tick'>✔</p> : null}</p>
              </div>
              <div id='select-box' style={type == 'long' ? tickCSS : null} onClick={() => { setType('long'); }}>
                <p>Long Term {type == 'long' ? <p id='tick'>✔</p> : null}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row2'>
        <div className='left'>
          <div id='text'>
            <p>Select Your Annual Income</p>
          </div>
          <div id='block-div'>
            <select id='block' onChange={(e) => { setAnnual(e.target.value) }}>
              <option value="0">$0 - $18,200</option>
              <option value="1">$18,201 - $45,000</option>
              <option value="2">$45,001 - $120,000</option>
              <option value="3">$120,001 - $180,000</option>
              <option value="4">$180,001+</option>
            </select>
          </div>
        </div>
        <div className='right'>
          <div className='inner-right'>
            <div id='text'>
              <p>Tax Rate</p>
            </div>
            <div id='block-div'>
              <div id='block-rate'>
                <p>{taxRate[annual]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {type == 'short' ? null :
        <div className='row2'>
          <div className='left'>
            <div id='text'>
              <p>Capital gains amount</p>
            </div>
            <div id='block-div'>
              <input
                id='block'
                type="text"
                value={sale_price - expenses - purchase_price}
                onChange={handleInputChangePurchase}
              />
            </div>
          </div>
          <div className='right'>
            <div className='inner-right'>
              <div id='text'>
                <p>Discount for long term gains</p>
              </div>
              <div id='block-div'>
                <input
                  id='block'
                  type="text"
                  value={0.5 * (sale_price - expenses - purchase_price)}
                  onChange={handleInputChangeSale}
                />
              </div>
            </div>
          </div>
        </div>}

      <div className='row2'>
        <div className='left'>
          <div id='block-div-end-left'>
            <div id='block'>
                <p id='p1'>Net Capital gains tax amount</p>
                <p id='p2'>${type == 'long'? 0.5 * (sale_price - expenses - purchase_price) : (sale_price - expenses - purchase_price)}</p>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='inner-right'>
            <div id='block-div-end-right'>
              <div id='block'>
                <p id='p1'>The tax you need to pay*</p>
                <p id='p2'>${taxCalculate()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

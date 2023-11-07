import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('$ ');

  const [price,setPrice]=useState(0);

  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    setPrice(numericValue);
    setInputValue('$ ' + numericValue);
  };


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
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='right'>
          <div className='inner-right'>
            <div id='text'>
              <p>Enter sale price of Crypto</p>
            </div>
            <div id='block-div'>
              <input id='block'>

              </input>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

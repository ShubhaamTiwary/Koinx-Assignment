import './App.css';

function App() {
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
            <select id='block'>
              <option value="nil" >FY 2023-24</option>
            </select>
          </div>
        </div>
        <div className='right'>
          <div id='text'>
            <p>Country</p>
          </div>
          <div id='block-div'>
            <select id='block'>
              <option value="nil">Australia</option>
            </select>
          </div>
        </div>
      </div>

      <div className='row'>
        <div id='line'></div>
      </div>

    </div>
  );
}

export default App;

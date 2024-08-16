import { useState } from 'react'
import './App.css'

function App() {
  const [price, SetPrice] = useState(0);
  const [discount, SetDiscound] = useState(0);
  const [Discoundrate, SetDiscoundrate] = useState(0)
  const [amount, SetAmount] = useState(0)
  function Calculate() {
    const Discoundrate = (price / 100) * discount;
    SetDiscoundrate(Math.round(Discoundrate))
    SetAmount(price - Discoundrate)
  }

  function Reset() {
    SetPrice(0)
    SetDiscound(0)
    SetDiscoundrate(0)
    SetAmount(0)
  }

  return (
    <>
      <div className="container ">
      
      <div className="head" >
        <h1 >Real-time discount calculator</h1>
        <p style={{color:'#1a2a6c'}}>Use the discount calculator online to find out the exact amount you will save!</p>
      </div>

      <div className="row">
        <div className="input col-6">

          <label htmlFor="">Enter The Amount</label><br /><br />
          <input type="text" onChange={(e) => SetPrice(e.target.value) } value={price||''} placeholder='Enter The Amount' /><br /><br />
          <label htmlFor="">Discound %</label><br /><br />
          <input type="text" onChange={(e) => SetDiscound(e.target.value)} value={discount||''} placeholder='Discound %' /><br /><br />
          <button className='btn' onClick={Calculate}>Calculate</button><br />
          <button className='btn' onClick={Reset}>Reset</button>

        </div>
        <div className="output col-6">
          
            <h1 >Amount paid</h1>
           
            <div className="price">
              <h2>New price</h2>
              <h1>&#8377; {amount}</h1>
            </div>
          
          <div className="discount">

            <p>Amound Saved: &#8377;{Discoundrate}</p>

            <p>Actual Price: &#8377;{price}</p>


          </div>

          

        </div>
      </div>


      </div>








    
    </>
  )
}

export default App
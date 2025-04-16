import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [Add, SetAdd] = useState(0);

  const calSum = (e) => {
      e.preventDefault()

      if(num1 ===0 || num2 ===0 || num3 ===0){
        alert("Please enter your prt values")
      }

      else {
        let Add = parseInt(num1)*parseInt(num2)*parseInt(num3)/100;
        
       
        SetAdd(Add)
      }
  }

  const handleClick = (e) => {
        
        window.location.reload()
  }

  return (


    <>
      <div className='app'>
        <div className='container'>
          <div className="heading-text">
            <h2 className="heading1">Simple Calculator</h2>
            <p className="heading2">Calculate your simple interest easily</p>
          </div>
        </div>
        <div className="total-amount-card">
          <div className="card-text">
            <div className="total-amount-heading">
              {Add}
            </div>
            <p className='total-amount-para'>Total Simple Interest</p>
          </div>
        </div>

        <form onSubmit={calSum}>
          <div className='input_area'>
            <div className='input-field'>
              <TextField
                label="Principal Amount"
                variant="outlined"
                fullWidth
                value={num1 || ""}
                onChange={(e)=> setNum1(e.target.value)}
              />
                

            </div>

            <div className='input-field'>
              <TextField
                label="Rate of Interest"
                variant="outlined"
                fullWidth
                value={num2 || ""}
                onChange={(e)=> setNum2(e.target.value)}
              />
            </div>


            <div className='input-field'>
              <TextField
                label="Time Period"
                variant="outlined"
                fullWidth
                value={num3 || ""}
                onChange={(e)=> setNum3(e.target.value)}
              />
            </div>
            <Button type="submit" variant="contained" >Calculate</Button>&nbsp; &nbsp;
            <Button  variant="outlined" onClick={handleClick}>Reset</Button>
          </div>
        </form>

      </div>
    </>
  )
}

export default App

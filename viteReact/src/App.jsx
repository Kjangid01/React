import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [num, setnum] = useState(0)
  //let num = 5;
  const addValue = () => {    
      //setnum(num+1)
      setnum(last => last+1)      
      setnum(last => last+1)

    }
        
  const removeValue =()=>{  
    setnum(num-1)
  }

  return (
    <>
      <h1>Count Nmber: {num}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

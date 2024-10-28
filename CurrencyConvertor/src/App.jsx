import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCustomHooks from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo = useCustomHooks(from)  
  const options = Object.keys(currencyInfo)
  
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = ()=>
  {    
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-cover'
         style={{backgroundImage:`url("https://images.pexels.com/photos/19149102/pexels-photo-19149102/free-photo-of-rocks-on-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>

        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border-gray-60 p-5 rounded-xl bg-white/30 border bg-opacity-35' >

          <form onSubmit={(e)=>{
            e.preventDefault();
            convert()
          	   }}>
            <div className='w-full mb-2'>
            <InputBox 
                label="From" 
                amount={amount}
                currencyOptions={options}
                onCurrencychange={(currency)=>setFrom(currency)}
                selectCurrency={from}
                onAmountchange={(amount)=>setAmount(amount)}
                />
            <button className='bg-blue-800 rounded-lg
                       text-white px-2 border-solid border-2 border-black/5 my-2'
             onClick={swap}>Swap</button>
            <InputBox
                label="To" 
                amount={convertedAmount}
                currencyOptions={['inr']}
                onCurrencychange={(currency)=>setTo(currency)}
                selectCurrency={to}
                
                />
            <button type='submit' className='w-full bg-blue-800 text-white text-2xl  rounded-lg mt-2 py-2'>
              Convert {from } to {to} </button>
            </div>

            </form>
          </div>        
        </div>
    </div>
    
  )
}

export default App

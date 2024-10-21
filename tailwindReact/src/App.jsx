import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let data = {
    name:"DJ",
    rel:"Bro"
  }
  let arr=["akky",21]

  return (
    <>
      <h1 className='bg-green-300 text-black p-1 rounded-xl w-3/6 mb-5'>Tailwind Starts</h1>

      <Card username={data.name} btntxt='View more'/> 
      <Card username={arr[0]} />      
      
    </>
  )
}

export default App

import { useCallback, useEffect, useState, useRef } from 'react'
//import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passGenerator=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+= "0123456789"
    if(charAllow) str+= "!@#$%^&*_-+={}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)      
    }
    setPassword(pass)
    
  }, [length, numAllow, charAllow, setPassword])

  const copyText =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password)}, [password])

  useEffect(()=>{passGenerator()}, [length, charAllow, numAllow, setPassword])

  

  return (
    <>      
      <div className='w-full mx-auto max-w-md my-8 px-4 py-3  text-orange-600  bg-slate-600 rounded-md'>
      <h1 className='text-3xl text-white text-center my-4'>Password Generator</h1>

      <div className='flex overflow-hidden mb-3 rounded-md'>      
        <input type='text' 
        className='w-full text-xl px-3 py-1' 
        placeholder='Password' 
        value={password}
        ref={passwordRef}
        readOnly/>
        <button className='text-white bg-blue-700 px-3 hover:bg-blue-900' onClick={copyText}>copy</button>
      </div>

      <div className='flex gap-x-4'>
        <div className='flex gap-x-2'>
        <input type="range" 
        min={8} 
        max={100} 
        value={length}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                 defaultValue={numAllow} 
                 onChange={()=>{setnumAllow((prev)=> !prev);
                   }} />
          <label>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                 defaultValue={charAllow}
                 onChange={()=>{setcharAllow((prev)=>!prev);}} />
          <label>Charater</label>
        </div>
      </div>

      </div>
    </>
  )
}

export default App

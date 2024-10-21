import {useState} from 'react'

function App() {
  const [color, setColor] = useState("lightgreen")

  return (
    <>
      <div className="w-full h-screen "
       style={{backgroundColor:color}}
       >
        <div className='fixed flex flex-wrap justify-center bottom-12 px-2 
        inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 bg-white 
          rounded-2xl shadow-l px-3 py-2'> 
            <button onClick={()=> setColor("red")}  className=' outline-none rounded-full 
            px-4 py-1 text-white shadow-md' style={{backgroundColor:'red'}}>
              RED</button>
            <button onClick={()=> setColor("green")} className='rounded-full
             px-4 py-1 text-white shadow-md' style={{backgroundColor:'green'}}>
              GREEN</button>
            <button onClick={()=> setColor("blue")} className='rounded-full px-4 
            py-1 text-white shadow-md' style={{backgroundColor:'blue'}}>
              BLUE</button>
            <button onClick={()=> setColor("olive")} className='rounded-full 
            px-4 py-1 text-white shadow-md' style={{backgroundColor:'olive'}}>
              OLIVE</button>
              <button onClick={()=> setColor("grey")} className='rounded-full 
            px-4 py-1 text-white shadow-md' style={{backgroundColor:'grey'}}>
              GREY</button>
              <button onClick={()=> setColor("yellow")} className='rounded-full 
            px-4 py-1 text-black shadow-md' style={{backgroundColor:'yellow'}}>
              YELLOW</button>
              <button onClick={()=> setColor("pink")} className='rounded-full 
            px-4 py-1 text-black shadow-md' style={{backgroundColor:'pink'}}>
              PINK</button>
              <button onClick={()=> setColor("purple")} className='rounded-full 
            px-4 py-1 text-black shadow-md' style={{backgroundColor:'purple'}}>
              PURPLE</button>
              <button onClick={()=> setColor("lavender")} className='rounded-full 
            px-4 py-1 text-black shadow-md' style={{backgroundColor:'lavender'}}>
              LAVENDER</button>
              <button onClick={()=> setColor("white")} className='rounded-full 
            px-4 py-1 text-black shadow-md' style={{backgroundColor:'white'}}>
              WHITE</button>
              <button onClick={()=> setColor("black")} className='rounded-full 
            px-4 py-1 text-white shadow-md' style={{backgroundColor:'black'}}>
              BLACK</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

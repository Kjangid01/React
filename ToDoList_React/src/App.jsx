import React, { useState, useEffect } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
//import * from 'react-icons'


function App() {
  const [taskTitle, setTaskTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [todolist, setTododlist] = useState([])  
  const [isSelected, setIsSelected] = useState(false)
  const [completed,setCompleted] = useState([])

  const [warning, setWarning] = useState(false)

  const handleToDo=()=>{
    let item={
      title:taskTitle,
      desciption:desc
    }
    if(item.title==="" || item.desciption===""){
      setWarning(true)
    }else {
      setWarning(false)
    let updateTodo=[...todolist];
    updateTodo.push(item);
    updateTodo.reverse();
    setTododlist(updateTodo);
    localStorage.setItem('ToDoList',JSON.stringify(updateTodo));
    setTaskTitle('');setDesc('')}
  }

  const DeleteTask=(index)=>{
      let allToDo = [...todolist];
      allToDo.splice(index,1);
      localStorage.setItem('ToDoList',JSON.stringify(allToDo));
      setTododlist(allToDo)
  }

  const completeTask=(index)=>{
    let now= new Date();
    let d=now.getDate() +1;
    let m=now.getMonth() +1;
    let y=now.getFullYear();
    let hh=now.getHours();
    let min=now.getMinutes();
    let completeTime= d+'-'+m+'-'+y+'  '+hh+':'+min;
    let newcompletedTask = {
      ...todolist[index],completedOn:completeTime};
    
      let allCompleted = [...completed]
      allCompleted.push(newcompletedTask);
      allCompleted.reverse();
      localStorage.setItem("completedToDos",JSON.stringify(allCompleted))
      setCompleted(allCompleted);
      DeleteTask(index)
  }

  const DeletefromCompleted=(index)=>{
    let allToDo = [...completed];
    allToDo.splice(index,1);
    localStorage.setItem('completedToDos',JSON.stringify(allToDo));
    setCompleted(allToDo)
}

  useEffect(()=>{
    let savedToDo = JSON.parse(localStorage.getItem("ToDoList"));
    let completedToDo = JSON.parse(localStorage.getItem("completedToDos"));
    if(savedToDo){
    setTododlist(savedToDo);}

    if(completedToDo){
      setCompleted(completedToDo);}
  },[])

  

  return (
    <div className=' w-full h-screen bg-slate-800'>
      
        <h1 className='text-white text-center font-bold text-5xl p-5'>My ToDos </h1>

        <div className='w-full'>

        <div className='mx-auto w-fit bg-gradient-to-r from-violet-600 to-fuchsia-600 p-5
                         rounded-t-lg mb-5 shadow-md shadow-white'>

          <div className='flex justify-center items-center '>

            <div className='m-2'>
              <h1 className='text-white size-2xl font-bold mb-2 text-xl'>Title</h1>
              <input type='text' placeholder='task title' className='bg-slate-300/40 rounded-xl 
                      p-2.5 w-60 border-none font-semibold' 
                      value={taskTitle}
                      onChange={(e)=>setTaskTitle(e.target.value)}
                      />                    
            </div>

            <div className='m-2'>
              <h1 className='text-white size-2xl font-bold mb-2 text-xl'>Decription</h1>
              <input type='text' placeholder='write about title' className=' bg-slate-300/60 rounded-xl
                     p-2.5 w-80 font-semibold'
                     value={desc}
                     onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            
            <div className='m-3'>
              <button type='button' className='rounded-lg border border-neutral-900 bg-lime-600
                       px-9 py-3 font-bold active:bg-green-800 active:text-emerald-300 
                      shadow-md shadow-gray-500 hover:shadow-slate-700' 
                       onClick={handleToDo}>Add</button>
            </div>  
                      
          </div>
          <div><p className={`text-red-800 drop-shadow-2xl text-lg font-serif 
                                        ${ warning ? 'visible' : 'hidden'}`}>Please fill empty</p></div>

          <div className='  mt-5 mb-3 pt-2 text-center flex justify-end border-t-2 border-grey'>
            <button type='button' className={`rounded-l-md border border-neutral-900 border-r-0
                   px-4 font-bold ${ isSelected? 'bg-transparent': 'bg-green-500'} 
                   shadow-md shadow-gray-500 hover:shadow-slate-700`} 
                    onClick={()=>setIsSelected(false)}
                     > ToDos </button>
            <button type='button' className={`rounded-r-md border border-neutral-900 border-l-0
                      px-4 font-bold ${isSelected ? 'bg-green-500': 'bg-transparent'} 
                      shadow-md shadow-gray-500 hover:shadow-slate-700`} 
                      onClick={()=>setIsSelected(true)}
                      title='View Completed Task'> Completed 
                            <span className="text-pink-500 mr-2">✔</span></button>            
          </div>
          
          <div>

            {isSelected===false && todolist.map((items,index)=>{
              return (
                  <div className='flex justify-between p-3 bg-slate-600 mb-3 shadow-lg shadow-gray-800
                           rounded-md' key={index}>
                    <div>
                      <h1 className='text-green-400 text-xl font-bold'>{items.title}</h1>
                      <p>{items.desciption}</p>
                      
                    </div>
                    <div className='flex mr-4'>
                      
                      <MdDone className='mr-4 mt-2 text-4xl hover:text-green-400 cursor-pointer' 
                              title='Completed Task ?'
                              onClick={()=>completeTask(index)}/>
                      <AiOutlineDelete className='text-4xl mt-2 hover:text-red-600 hover:shadow-red-700
                                      cursor-pointer' title='Delete Task'
                                      onClick={()=>DeleteTask(index)}/>
                    </div>
                  </div>  )
            })}

            {isSelected===true && completed.map((items,index)=>{
              return (
                  <div className='flex justify-between p-3 bg-slate-600 mb-3 shadow-lg shadow-gray-800
                          rounded-md' key={index}>
                    <div>
                      <h1 className='text-green-400 text-xl font-bold'>{items.title}</h1>
                      <p className='text-lg'>{items.desciption}</p>
                      <p>Completed On : {items.completedOn}</p>
                    </div>
                    <div className='flex mr-4'>                      
                      
                      <AiOutlineDelete className='text-4xl mt-2 hover:text-red-600 hover:shadow-red-700
                                      cursor-pointer' title='Delete Task'
                                      onClick={()=>DeletefromCompleted(index)}/>
                    </div>
                  </div>  )
            })}
            
          </div>

          
        </div>
      </div>
    </div>
    
  )
}

export default App

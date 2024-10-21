import logo from './logo.svg';
import './App.css';
import {User} from './User';
import Student from './Student'
import React, { useState } from 'react'


//Basic form
function App(){
  const [name,setname]=useState("");
  const [int,setInt]=useState("");
  const [tnc,setTnc]=useState(false);
  function getFormData(e){
    console.log(name,int,tnc);
    e.preventDefault();
  }
  
  return(
    <div className='App'>
      <h1> Basic Form </h1>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='enter name' onChange={(e)=>setname(e.target.value)}/> <br/><br/>
        Interest in:- <select onChange={(e)=>setInt(e.target.value)}>
                        <option disabled>Select interests</option>
                        <option>Watching Anime</option>
                        <option>Watching movies</option>
                        <option>Reading Books</option>
                        <option>Travelling</option>
                      </select> <br/><br/>
        <input type='checkbox'  onChange={(e)=>setTnc(e.target.checked)}/> Accept Terms And Conditions.<br/><br/>
        <button type='submit'>Submit</button>
        <button type='submit' onClick={allclear}>Clear</button>
      </form>
    </div>
  )
}

//hide n show element
/*function App(){
  const [status,setstatus] = useState(true);
  return(
    <div className='App'>
    <h1> Hide n Show element</h1>
    { status? <h2>To hide n show press buttons </h2>:null }
    <button onClick={()=> setstatus(false)}>Hide </button>
    <button onClick={()=> setstatus(true)}>Show</button> <br/>
    <button onClick={()=> setstatus(!status)}>Toggle</button>

    </div>

  )
}*/




//get input box value
/*function App(){
  const [data, setData]=useState(null)
  const [print,setprint] = useState(false)
  function getData(val){
    console.log(val.target.value);
    setData(val.target.value);
  }
  return(
    <div className='App'>
      <h2>Get input box value</h2>
      <input type='text' onChange={getData} />
      <h3>{data}</h3>
      { print? <h2>{data}</h2> : null
      }
      <button onClick={()=>setprint(true)}>Print</button>
      
    </div>
  )
}*/


//props in class component with button
/*class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Harsh"
    }
  }
 function App(){
  render()
  {console.log(this.state)
    return(
      <div className='App'>
        <h1>Props in class components</h1>
      <Student name={this.state.name} email='akky200@gmial.com' ><h3>Hello hii akky bete</h3></Student>
      <button onClick={()=>this.setState({name:"Harsh Sharma"})}>Change</button>
      </div>
    )
  }
}*/



//props in functional components
// function App(){
//   return(
//     <div className="App">
//       <h1>Props in React :) </h1>
//       <Student name="Abhisek" age='24' email="abhishekachiwal@gmil.com" address={{street:'Ram colony', city:'Jaipur'}} mob="8x00x0x5x0" />
//       <Student name="Vishan Singh" age='30' email="vishan@gmil.com" address={{street:'khatipura', city:'Jaipur'}} mob="8x5x4x15x0" />
//       <Student name="rakesh " age='28' email="rakesh@gmil.com" address={{street:'jhotwara', city:'Jaipur'}} mob="8x004x145x" />
//     </div>
//   )
// }



//useState in functional component
// function App() {
//   const [data,update]=useState(0)
//   function updateData(){
//     update(data+1)
//     //console.log("update here")
//   }
//   console.warn("refreshed");
//   return (
//     <div className="App">
//       <h2>Parent Component</h2>
//       <h1>Score: {data}</h1>     
//       <button onClick={updateData}>Click Me</button>
            
//     </div>    
//   );
// }



// function Users(){
//   const [name,fname]=useState("Kartik")
//   console.log("name")
//   return (
//       <div>
//       <h2>other Component in same file</h2> 
//       <h1>hello {name}</h1>
//       <button onClick={()=>fname("Kartik Jangid")}>Full Name</button>
//       </div>
//   )
// }

export default App;

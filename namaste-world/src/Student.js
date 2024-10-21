import React from 'react'

// function Student(prop){
//     return(
//         <div style={{backgroundColor:'skyblue', margin: 15}}>
//         <h2>Students Component</h2>
//         <h3>Name:{prop.name} </h3>
//         <h3>  Age:{prop.age}</h3>
//         <h3>Address-Street:{prop.address.street} City:{prop.address.city}</h3> 
//         <h3>Mob. :{prop.mob}</h3>
        
//         </div>
//     )
// }

class Student extends React.Component{
    render()
    {   
        console.log(this.props)
        return(
            <div style={{backgroundColor:'skyblue', margin:50}}>
                <h2> Hello {this.props.name}</h2>
            </div>
        )
    }
}
export default Student;
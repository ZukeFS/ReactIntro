import React from 'react'

function Conditional(props){
    //Conditional Rendering
    //Method-1: 
    // if(props.isLoading === true){  
    //     return (
    //         <h2>Loading...</h2>
    //     )
    // }
    // return (
    //     <h2>Welcome to ZukeLand!! :D</h2>
    // )

    //Method-2: Ternery Operator
    return (
        <div>
            {props.isLoading ? <h2>Loading...</h2> : <h2>Welcome to ZukeLand!! :D</h2>}
        </div>
    )  
}


export default Conditional
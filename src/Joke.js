import React from 'react';

function Joke(props){
   return (
       <div>
           <h3 style={{color: "red", display : !props.question && "none"}}>Question: {props.question}</h3>
           <h4 style={{color: props.question ? "orange" : "green"}}>Answer: {props.punchLine}</h4>
           <hr style={{color: "blue"}}/>
       </div>
   )
}

export default Joke
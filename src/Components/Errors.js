import React from 'react';



const Errors = (props)=>{
    
    return(
        <div className='row red lighten-3 p-2'>
            <span className="col" style={{marginTop: "8px"}}>
                <button className="btn-floating btn-small waves-effect waves-light red" onClick={props.removeErrors}><i className="material-icons">clear</i></button>
            </span>

            <ul className="col">
                {
                  props.errors.map((err,index)=>{ 
                    return (
                      <li key={index+=1} data-testid="errors"> { err} </li>) }
                    )
                }
            </ul>
            
        </div>
    )
}

export default Errors;
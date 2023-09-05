import React, { useState } from 'react'

function Counter() {
    const[count, setcount]=useState(0);
    const [step, setStep]=useState(1);

    const date=new Date("June 27 2027");
    date.setDate(date.getDate()+count)
  return (
    <div>
     <div>
        <button onClick={()=>setStep((c)=>c-1)}>-</button>
        <span>Count:{step}</span>
        <button onClick={()=>setStep((c)=>c+1)}>+</button>
     </div>
     <div>
        <button onClick={()=>setcount((c)=>c-step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={()=>setcount((c)=>c+step)}>+</button>
     </div>

     <p>
        <span>{count===0?"Today is ":count>0?`${count} days from today is`:`${count} days ago was`}</span>
        {date.toDateString()}
        
        </p>
    </div>
  )
}

export default Counter

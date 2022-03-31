import { useState } from "react";
export function Counter(){
    const [counter, setCounter] = useState(0);
    const changeValue=(value)=>{
        if(value===(-1) && counter===0) return;
        setCounter(counter + value)
    }
    return (
    <div className="main">
        <p>  {counter}</p>
        <div className="child">
            <button onClick={()=>changeValue(+1)}>increment</button>
            <button onClick={()=>changeValue(-1)}>decrement</button>
            <button onClick={()=>changeValue(+counter)}>double</button>
        </div>
    </div>
    )
}
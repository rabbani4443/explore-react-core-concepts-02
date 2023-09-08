import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    function handleAdd(){
        const newCount = count + 1;
        setCount(newCount);
    };

    function handleReduce(){
        const newCount = count -1;
        setCount(newCount);
    };



   return(
    <div style={{border:'2px solid purple', borderRadius:'15px 0px', padding:'20px', margin:'10px'}}>
        <h2>Counter: {count} </h2>
        <button onClick={handleAdd} style={{backgroundColor:'blue', borderRadius:'7px',color: 'white', margin:'10px' }}>Add Count</button>

        <button onClick={handleReduce} style={{backgroundColor:'blue', borderRadius:'7px',color: 'white', margin:'10px'}}>Reduce Count</button>
    </div>
        
   );
}
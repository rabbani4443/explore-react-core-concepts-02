import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users';
import Friends from './Friends.Jsx';


function App() {
  
  function handelClick(){
    alert(' Click on this Button')
  };

  const handelClick2 = ()=>{
    alert('Click on this Button-02')
  }

  const handelClick4 =(num) =>{
    alert(num + 6);
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>

      <button onClick={handelClick}>Click me</button>
      <button onClick={handelClick2} >Click me2</button>
      <button onClick={()=>{alert('Third Click on this buttons')}}>Third Click</button>
      <button onClick={()=>handelClick4(4)}>Four Click</button>
    </>
  )
}

export default App

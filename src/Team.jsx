import { useState } from "react"

export default function Team(){
    const [teamCount, setTeam] = useState(11);
    const handelAdd =()=>{
        const newTeam = teamCount + 1;
        setTeam(newTeam);
    };

    const handelRemove =() =>{
        const newTeam = teamCount - 1;
        setTeam(newTeam);
    }


    const teamStyle ={
        border:'2px solid gray',
        borderRadius: '15px 0px',
        padding:'20px',
        margin:'10px'
    };
   const bitStyle ={
    backgroundColor:'purple', 
   borderRadius:'7px',
   color: 'white' ,
   margin:'10px',
}


    return(
        <div style={teamStyle}>
            <h2>Players : {teamCount} </h2>
            <button onClick={handelAdd} style={bitStyle}>Add </button>
            <button onClick={handelRemove} style={bitStyle}>Remove </button>
        </div>
    )
}
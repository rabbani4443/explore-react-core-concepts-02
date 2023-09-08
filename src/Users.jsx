import { useEffect, useState } from "react";

export default function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const teamStyle ={
        border:'2px solid gray',
        borderRadius: '15px 0px',
        padding:'20px',
        margin:'10px'
    };
    return(
        <div style={teamStyle}> 
        <h3>Users : {users.length} </h3>
        </div>
    )
}
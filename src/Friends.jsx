import { useEffect, useState } from "react";

import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    const teamStyle ={
        border:'2px solid purple',
        borderRadius: '15px 0px',
        padding:'20px',
        margin:'10px'
    };
    return(
        <div style={teamStyle}>
            <h2>Friends : {friends.length} 
            </h2>
            {
                friends.map(friend => <Friend friend={friend} ></Friend> )
            }
        </div>
    )
}
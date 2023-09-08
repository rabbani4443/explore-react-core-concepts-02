export default function Friend(friend){
    const {name, email} = friend.friend;
    // console .log (name, email)

    const friendStyle ={
        border:'2px solid gray',
        borderRadius: '15px',
        padding:'20px',
        margin:'20px 0px'
    };
    return(
        <div style={friendStyle}>
       <h3>Name : {name} </h3>
       <h4>Email : {email}</h4>
        </div>
    )
}
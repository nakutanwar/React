import { useEffect, useState } from "react";

const User = ({name}) =>{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    useEffect(()=>{
        // API CALL
    }, []);

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h1>Name : {name}</h1>
            <h2>Location : Delhi</h2>
            <h3>Contact : @nakulTanwar</h3>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <button onClick={()=>setCount2(count2+1)}>Increment Count2</button>
        </div>
    )
}
export default User;
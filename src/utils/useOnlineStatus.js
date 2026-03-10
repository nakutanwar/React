import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    // try Checkif online
    const [onlineStatus, setOnlineStatus] = useState(true);


    useEffect(()=>{
        
        window.addEventListener('offline', ()=>{
            setOnlineStatus(false)
        })

        window.addEventListener('online', ()=>{
            setOnlineStatus(true)
        })

    },[]);

    // boolean value
    return onlineStatus;
}


export default useOnlineStatus;
import { useRouteError } from "react-router";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    
    return(
        <div>
            <h1>OOPS!</h1>
            <h1>404 Page Not Found</h1>
            <h2>{err.status}</h2>
            <h2>{err.status}</h2>

        </div>
    )
}

export default Error;
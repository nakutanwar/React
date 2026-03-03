import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log('Parent Constructor');
    }  
    
    componentDidMount(){
        console.log('Parent Component Did Mount');
    }   
    
    render(){
        console.log('Parent Render');
        
        return (
            <div>
                <h1>About</h1>
                <h3>This is about Page</h3>
                {/* <User name={'Nakul (Functional Comp)'} /> */}
                <UserClass name={'Nakul (class Comp)'} location={'Delhi (Class)'} />
                {/* <UserClass name={'Elon Musk (class Comp)'} location={'Texas (Class)'} /> */}
            </div>
        );
    }
}
    /*
-parent Constructor
-parent Render

    -1st child Constructor
    -1stchild Render

    -2nd child Constructor
    -2nd child Render

    <Dom Updated - in Single batch>

    -1stchild Component Did Mount
    -2nd child Component Did Mount

-parent Component Did Mount 



*/

// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h3>This is about Page</h3>
//             <User name={'Nakul (Functional Comp)'} />
//             <UserClass name={'Nakul (class Comp)'} location={'Delhi (Class)'} />
//         </div>
//     );
// };
export default About;
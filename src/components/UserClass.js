import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            userInfo : {
                name : "Dummy",
                location : "Dummy Location",
                id : "Dummy Id",
                avatar_url : "Dummy Avatar",
            }
        });

        // this.state = {
        //     count : 0,
        // }
        // console.log(this.props.name + 'Child Constructor');
        
    }

    async componentDidMount(){
        // console.log(this.props.name +'Child Component Did Mount');
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        // console.log(json);

        this.setState({
            userInfo : json,
        })
        // Api Call here to get the data and update the state
    }
    componentDidUpdate(){
        // console.log('Component Did Update');
    }


    componentWillUnmount(){
        // console.log('Component Will Unmount');
    }


    render(){

        // console.log('Child Render');
        const {name, location,id, avatar_url} = this.state.userInfo
        // const {count} = this.state;

    

        return(
        <div className="user-card">
            {/* <h1>Count = {count}</h1> */}
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Id : {id}</h3>
            <h3>Avatar :
                <img src={avatar_url} />
            </h3>
            {/* <button onClick={() =>
                // NEVER UPDATE STATE VARIABLE DIRECTLY LIKE THIS : count = count + 1
                this.setState({count : count + 1})}>Increment Count</button> */}
        </div>
    )
    }
}

export default UserClass; 
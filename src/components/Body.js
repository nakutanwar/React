import RestaurentCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/MockData";

const Body = ()=>{

//Local State Variable - Super Powerful variable 
const [listOfRestaurents, setListOfRestaurant] = useState(resList);
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="filter-container">
        <button type="button" className="filter"
         onClick={() =>{
            const filteredListOfRestaurents = listOfRestaurents.filter((res)=> res.avgRating > 4)
            console.log(listOfRestaurents);
            setListOfRestaurant(filteredListOfRestaurents)
            
        }}  
        >Top Rated Button 👍</button>
      </div>
        <div className="card-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurentCard
            key={restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
        
      </div>
  )
}
export default Body;
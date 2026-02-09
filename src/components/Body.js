import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";


const Body = ()=>{


const [listOfRestaurents, setListOfRestaurant] = useState([]);
const [allRestaurants, setAllRestaurants] = useState([]);


useEffect(()=>{
    console.log('UseEffect CAlled');
    fetchData();
    
}, [] )


const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.621355&lng=77.134105&collection=80383&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  );

  const json = await data.json();

  const restaurants = json?.data?.cards
    ?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    .map((card) => card?.card?.card?.info) // directly take info
    .filter(Boolean);

  console.log(restaurants);

  setListOfRestaurant(restaurants);
  setAllRestaurants(restaurants);
};


// const fetchData = async () => {
//     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.621355&lng=77.134105&collection=80383&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null');

//     const json = await data.json();

//     console.log(json.data.cards[3].card.card);
//     // setListOfRestaurant(json.data.cards)
    
     
     
// }


//Local State Variable - Super Powerful variable 
// const [listOfRestaurents, setListOfRestaurant] = useState(resList);
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="filter-container">
        <button type="button" className="filter"
         onClick={() =>{
           const filteredList = allRestaurants.filter(
            (res) => res.avgRating > 4);
            setListOfRestaurant(filteredList);
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
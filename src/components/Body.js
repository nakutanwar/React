import RestaurentCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import  useOnlineStatus  from "../utils/useOnlineStatus"
// import { SWIGGY_API } from "../utils/constant";

import useRestaurantsData from "../utils/useRestaurantsData";

const Body = () => {
  
  // Local State Variable = super powerful Variable
  // Never create use state in if else condition
  // never create use state in for loops/ function
  const listOfRestaurents = useRestaurantsData();
 const [allRestaurants, setAllRestaurants] = useState([]);

useEffect(() => {
  setAllRestaurants(listOfRestaurents);
}, [listOfRestaurents]);

 const [searchText, setSearchText] = useState("");
// when ever a  state variable updates , react triggers a reconsiliation cycle(re-render the component)
 console.log('Body Rendered');



  // useEffect(() => {
  //   console.log("UseEffect CAlled");
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(SWIGGY_API);

  //   const json = await data.json();
  //   // console.log(json.data.cards);

  //   const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   console.log(restaurants);

  //   setListOfRestaurant(restaurants);
  //   setAllRestaurants(restaurants);
  // };
  //   Conditional Rendering
  //   if (listOfRestaurents.length === 0) {
  //     return (<Shimmer />);
  //   }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>⚠️ You are offline. Please check your internet.</h1>
  }
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant card and update the UI
              // need Search text

              console.log(searchText);
                
             const filteredRestaurent = listOfRestaurents.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            setAllRestaurants(filteredRestaurent)
            }

        }
            type="button"
          >
            Search
          </button>
        </div>
        <button
          type="button"
          className="filter"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res?.info?.avgRating > 4.2,
            );
            setAllRestaurants(filteredList);
          }}
        >
          Top Rated Button 👍
        </button>
      </div>
      <div className="card-container">
        {allRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id }><RestaurentCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

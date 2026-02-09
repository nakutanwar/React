import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  

  const [listOfRestaurents, setListOfRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);


 const [searchText, setSearchText] = useState("");
// when ever a  state variable updates , react triggers a reconsiliation cycle(re-render the component)
 console.log('Body Rendered');



  useEffect(() => {
    console.log("UseEffect CAlled");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.621355&lng=77.134105&collection=80383&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );

    const json = await data.json();
    console.log(json);

    const restaurants = json?.data?.cards
      ?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      )
      .map((card) => card?.card?.card?.info)
      .filter(Boolean);

    console.log(restaurants);

    setListOfRestaurant(restaurants);
    setAllRestaurants(restaurants);
  };
  //   Conditional Rendering
  //   if (listOfRestaurents.length === 0) {
  //     return (<Shimmer />);
  //   }
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
              // filter the restaurant card and update thr UI
              // need Search text

              console.log(searchText);
                
             const filteredRestaurent = listOfRestaurents.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
            setListOfRestaurant(filteredRestaurent)
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
            const filteredList = allRestaurants.filter(
              (res) => res.avgRating > 4.2,
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Button 👍
        </button>
      </div>
      <div className="card-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";

const useRestaurantsData = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
       console.log("UseEffect Called");
       fetchData();
     }, []);
   
     const fetchData = async () => {
       const data = await fetch(SWIGGY_API);
   
       const json = await data.json();
       // console.log(json.data.cards);
   
       const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
       console.log(restaurants);
   
       setListOfRestaurants(restaurants);
     };
     return listOfRestaurants;
}

export default useRestaurantsData;
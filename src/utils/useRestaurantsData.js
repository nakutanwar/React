import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";

const useRestaurantsData = () => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    // console.log(json.data.cards);

    const resData = json?.data?.cards
      ?.filter((card) => card?.groupedCard)
      ?.map((card) => card?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
      ?.flat()
      ?.map((item) => item?.card?.card?.info)
      ?.filter(Boolean);

    // console.log(resData);

    setRestaurants(resData);
  };

  return restaurants;
};


export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white px-2 py-1 text-xs rounded">
          Promoted
        </label>

        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default useRestaurantsData;
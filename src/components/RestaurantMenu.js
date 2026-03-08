import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  console.log(resId);
  
  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);

  //   setResInfo(json.data);
  // };


  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
    
 const regularCards =
  resInfo?.cards?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

const itemCards =
  regularCards?.find((card) => card?.card?.card?.itemCards)
    ?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines?.join(", ")} <span>{costForTwoMessage}</span>
      </h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.name}
            - Rs {item.card.info.price / 100 || item.card.info.finalPrice / 100} - {" "}
            {item.card.info.ratings.aggregatedRating.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

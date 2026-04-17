import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  const [showIndex, setShowIndex] = useState(false);

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const groupedCard = resInfo?.cards?.find((card) => card?.groupedCard);

  const categories =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className=" font-bold mx-10 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines?.join(", ")} <span>{costForTwoMessage}</span>
      </h2>

      {categories?.map((category, index) => (
        <ResCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <ul>
        {categories?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.name}
            - Rs {item.card.info.price / 100 || item.card.info.finalPrice / 100} - {" "}
            {item.card.info.ratings.aggregatedRating.rating}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

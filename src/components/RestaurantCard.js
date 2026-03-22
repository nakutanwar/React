import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = ({ resData }) => {

  if (!resData) return null;
  const {loggedInUser} = useContext(UserContext)
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    locality,
    costForTwo,
    sla
  } = resData;

  return (
    <div className="border bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg">
      
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="card image"
        className="rounded-md w-full h-32 md:h-48 object-cover"
      />

      <div className="p-4 px-2">
        <h2 className="font-bold">{name}</h2>
        <h3 className="text-sm">{cuisines?.join(", ")}</h3>
        <h4>{locality}</h4>
        <h5>{costForTwo}</h5>
        <h6>{avgRating} ⭐</h6>
        <p>{sla?.slaString}</p>
        <small className="block">{loggedInUser}</small>
      </div>

    </div>
  );
};

// Higher Order Component
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

export default RestaurentCard;
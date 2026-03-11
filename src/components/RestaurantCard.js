import { CDN_URL } from "../utils/constant";

const CardStyle = {
  backgroundColor : '#e1e1e1',
  // padding: '10px'
}

const RestaurentCard = (props)=>{
  const {resData} = props;
  const {name,cuisines,locality,costForTwo,avgRating,slaString,cloudinaryImageId,sla} = resData?.info;
//   console.log(props);
  return(
    <div className="m-2 p-2 w-80 border bg-gray-50 hover:bg-gray-100 rounded-lg">
      <img src={CDN_URL + cloudinaryImageId} alt="card image " className=" rounded-md w-80 h-80" />
      
      
      {/* <img src={resData.cloudinaryImageId} /> */}
      {/* Via Destructuring
      //<h2 className="heding">{resName}</h2>
      //<h4>{cuisine}</h4> */}
      <h2 className="font-bold p-1 m-1">{name}</h2>
      <h3 className="text-sm">{cuisines}</h3>
      <h4>{locality}</h4>
      <h5>{costForTwo}</h5>
      <h6>{avgRating}</h6>
      <p>{sla?.slaString}</p>
    </div>
  )
}

export default RestaurentCard;
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
    <div className="border bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg">
      <img src={CDN_URL + cloudinaryImageId} alt="card image " className=" rounded-md w-full h-32 md:h-48 object-cover" />
      
      
      {/* <img src={resData.cloudinaryImageId} /> */}
      {/* Via Destructuring
      //<h2 className="heding">{resName}</h2>
      //<h4>{cuisine}</h4> */}
      <div className="p-4 px-2">
        <h2 className="font-bold">{name}</h2>
        <h3 className="text-sm">{cuisines}</h3>
        <h4>{locality}</h4>
        <h5>{costForTwo}</h5>
        <h6>{avgRating}</h6>
        <p>{sla?.slaString}</p>
      </div>
      
    </div>
  )
}

export default RestaurentCard;
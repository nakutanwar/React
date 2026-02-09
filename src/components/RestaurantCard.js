import { CDN_URL } from "../utils/constant";

const CardStyle = {
  backgroundColor : '#e1e1e1',
  // padding: '10px'
}

const RestaurentCard = (props)=>{
  const {resData} = props;
  const {name,cuisines,locality,costForTwo,avgRating,slaString,cloudinaryImageId} = resData;
//   console.log(props);
  return(
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="card image " style={CardStyle} />
      
      
      {/* <img src={resData.cloudinaryImageId} /> */}
      {/* Via Destructuring
      //<h2 className="heding">{resName}</h2>
      //<h4>{cuisine}</h4> */}
      <h2 className="heding">{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{locality}</h4>
      <h5>{costForTwo}</h5>
      <h6>{avgRating}</h6>
      <p>{slaString}</p>
    </div>
  )
}

export default RestaurentCard;
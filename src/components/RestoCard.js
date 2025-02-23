import { CDN_URL } from "../utils/constants";


const RestoCard = ({resData}) =>{
    //const {resData} = props;
    const {
        name, 
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime

    } = resData?.info;
    return(
        <div className="resto-card border bg-gray-200 rounded-lg shadow-md p-4 w-64 hover:shadow-2xl">
            <img alt="res logo" className="w-full h-48 object-cover rounded-t-lg" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3 className="text-xl font-bold mt-2">{name}</h3> 
            <h4 className="text-gray-700 mt-2 line-clamp-3">{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4 className="font-medium">{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}


//higher order component

export const vegCard = (RestoCard) =>{
  return  (props)=>{
    const {aggregatedDiscountInfoV3 } = props
    //console.log("props" , aggregatedDiscountInfoV3)
      return(
        <div>
   
          <label className="absolute p-2  rounded-b-xs text-white bg-green-600">Veg</label>
          <RestoCard {...props}/>
      </div>

      )
     
  }
}


export default RestoCard;
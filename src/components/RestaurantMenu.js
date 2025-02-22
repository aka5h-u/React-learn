import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);

    if(restInfo === null) return <Shimmer />
    const {name,cuisines,costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info ||  {};
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card|| {};
   // console.log(itemCards)
    //console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0])

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}  - {costForTwoMessage}</p>
           
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}> {item.card.info.name} - {"Rs. "}
                {item.card.info.price  /100 || item.card.info.finalPrice/100}</li> )}
         
            </ul>

        </div>
    )
}

export default RestaurantMenu; 
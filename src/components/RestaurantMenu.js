import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestoCategory from "./RestoCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  let count = 0;
  if (restInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  // console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  //console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-5">{name}</h1>
      <p className="my-4 ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/*            
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}> {item.card.info.name} - {"Rs. "}
                {item.card.info.price  /100 || item.card.info.finalPrice/100}</li> )}
         
            </ul> 
            */}

      {categories.map((cat, index) => {
        return (
          <RestoCategory
            showItems={index === showIndex ? true : false}
            key={cat?.card?.card?.title}
            data={cat?.card?.card}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

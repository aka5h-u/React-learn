import RestoCard from "./RestoCard";
import resList from "../utils/mockData";

import {useState} from "react"



const Body = () => {
    const [restoList, setRestoList] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filterdList = restoList.filter((rest) =>(
                        rest.info.avgRating > 4.3
                    ))
                    setRestoList(filterdList);
                    console.log(restoList);

                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="resto-container">
            {
                
                restoList.map((resto) => (
                    <RestoCard key={resto.info.id} resData={resto} />
                ))
            }
            </div>
        </div>

    );
};

export default Body; 
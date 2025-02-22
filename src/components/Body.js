import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    
    const [restoList, setRestoList] = useState([]);
    const [filterRestoList, setFilterRestoList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const dataJson = await data.json()
        //console.log(dataJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestoList(dataJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestoList(dataJson.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return(
            <h1>Looks like you have a bad internet connection</h1>
        )
    }
  
    return (restoList.length === 0 ) ? (<Shimmer/>) : (

        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn bg-green-100 px-4 py-1 m-4 rounded-lg cursor-pointer" onClick={() =>{
                       // console.log(searchText)
                       // console.log(restoList[0].info.name)
                        const searchResto = restoList.filter((resto) =>  (resto.info.name).toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestoList(searchResto);
                       
                    }

                    } >Search</button>
            
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="filter-btn px-4 py-2 bg-gray-100 " 
                        onClick={() => {
                            const filterdList = restoList.filter((rest) =>(
                            rest.info.avgRating > 4.3
                    ))
                    setFilterRestoList(filterdList);

                }}
                >Top Rated Restaurants</button>

                </div>
               
            </div>
            <div className="resto-container mx-auto p-4 flex flex-wrap gap-4">
            {
                
                filterRestoList.map((resto) => (
                 <Link key={resto.info.id} to={"/restaurant/" + resto.info.id}> <RestoCard  resData={resto} /></Link>  
                ))
            }
            </div>
        </div>

    );
};

export default Body; 
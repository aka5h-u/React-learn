import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



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
  
    return (restoList.length === 0 ) ? (<Shimmer/>) : (

        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() =>{
                       // console.log(searchText)
                       // console.log(restoList[0].info.name)
                        const searchResto = restoList.filter((resto) =>  (resto.info.name).toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestoList(searchResto);
                       
                    }

                    } >Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filterdList = restoList.filter((rest) =>(
                        rest.info.avgRating > 4.3
                    ))
                    setFilterRestoList(filterdList);

                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="resto-container">
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
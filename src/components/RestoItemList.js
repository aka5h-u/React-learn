
import { CDN_URL } from "../utils/constants";

const RestoItemList = ({items}) =>{
    //console.log(items)
  
    return (
        <div>
           {items.map((item) => {
                    const { id, name, price, defaultPrice, ratings, imageId, description } = item?.card?.info;
                    //{console.log(name)}

                    return(
                    <div key={id} className="">
                    <div >
                        <div className="flex items-start ">
                            {/* Left side: Column of text */}
                            <div className="flex flex-col text-left">
                                <span className="text-sm">{name}</span>
                                <span className="text-xs">₹{price / 100}</span>
                                <div className="border-b-2 border-gray-200  py-5">
                                    <p className="text-xs text-left break-words">{description}</p>
                                </div>
                            </div>
                            
      {/* Right side: Image and Button */}
                    <div className="ml-auto flex flex-col items-end ">
                        <img
                            className=" w-28 object-contain rounded-md mr-6"
                            src={CDN_URL + imageId}
                            alt={name}
                        />
                        <button className="absolute mr-12 border border-gray-200 px-2 py-1 bg-white text-green-600 font-bold rounded-lg cursor-pointer text-md my-16  hover:bg-gray-200">
                            ADD+
                        </button>
                        
                    </div>
                </div>
                 {/* Description below */}
            
            </div>
        </div>
                     
        )
              
                
        })
    } 

 
          
        </div>
    )
    
}

export default RestoItemList;
import React,{ useState } from 'react';
import { toast } from "react-toastify";


const SearchCard = ({item, isAdded}) => {

    const [addedItems, setAddedItems] = useState(item.addedItems || false);

    const handleAddClick = () => {
        if (addedItems) {
            
            setAddedItems(false); 
            toast.info(`${item.name} removed!`, { autoClose: 2000 }); 
          } else {
            
            setAddedItems(true); 
            if (isAdded) isAdded(item.name); 

          }
    };

  return (
  
  <div className="flex items-center justify-between p-4 max-w-lg bg-white rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-md">{item.description}</p>
      </div>
      <div className='relative'>
        <img className='rounded-lg max-w-44' src={item.image} alt="" />
        <button
        onClick={handleAddClick}
        className={`px-4 py-2 rounded-lg absolute bottom-2 right-2  ${
          addedItems ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {addedItems ? "Added" : "Add"}
      </button>
      </div>
    </div>
      
    
  )
}

export default SearchCard

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FeaturedItems, searchItems} from './assets/Data'
import SearchCard from "./Components/SearchCard";
import FeaturedCard from "./Components/FeaturedCard";

const App = () => {
  const handleAdd = (itemName) => {
    toast(`${itemName} added!`);
    
  }

  return (
    <div className="p-6 bg-gray-100 flex flex-col gap-4">
      
      <div className="py-3">
        <h1 className="font-bold text-2xl">Searched Items</h1>
      </div>
      
     <div className="grid grid-cols-3 grid-rows-2 gap-4">
     {searchItems.map((item) => (
         <SearchCard key={item.id} item={item} isAdded={handleAdd} />
      ))}
     </div>

      <div className="py-3">
        <h1 className="font-bold text-2xl">Featured Items</h1>
      </div>

     <div className="grid grid-cols-5 grid-rows-2 gap-4">
     {FeaturedItems.map((item) => (
         <FeaturedCard key={item.id} item={item} isAdded={handleAdd} />
      ))}
     </div>

     <ToastContainer position="top-right" autoClose={3000} />
     
    </div>
  );
};

export default App;


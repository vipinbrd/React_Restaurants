import { useState } from "react";
import { ShoppingCart } from "lucide-react"; 
import banner from "../../assets/React_Header.png"
import {Cart} from "../Cart/Cart"

export const Header = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCartOpen,setIsCartOpen]=useState(false);
  function onClose(){
    setIsCartOpen(false)
  }
 

  return (
    <>
    <header className="flex justify-between items-center p-4 bg-red-950 text-white shadow-md">
  
      <h1 className="text-2xl font-semibold">ReactMeals</h1>

    
      <button onClick={()=>setIsCartOpen(true)}className="relative flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        <ShoppingCart size={24} />
        <span className="text-lg font-medium">Cart</span>
        
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {cartQuantity}
        </span>
      </button>
    </header>
     <div>
        <img src={banner}></img>
     </div>
     {
      isCartOpen&&<Cart onClose={onClose}/>
     }
     
    </>
  );
};



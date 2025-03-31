import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../Store/CartData";

export function Cart({ onClose }) {
    const [showModal, setShowModal] = useState(false);
    const { cartData,insertItem } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 200);
    }, []);
  function plusHandler(ele){
     
    if(ele.qty>=5){
        return;
    }
    else{
        const elem={
            ...ele,qty:ele.qty+1

        }
        insertItem(elem)
    }


   
  }
  function minusHandler(ele){
    if(ele.qty<=1){
        return;
    }
    else{
        const elem={
            ...ele,qty:ele.qty-1

        }
        insertItem(elem)
    }
  }
 
    const totalAmount = cartData.reduce((sum, item) => sum + item.price * item.qty, 0);

    return createPortal(
        <>
  
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                    showModal ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
            ></div>

           
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl transition-all duration-300 w-96 max-w-full ${
                    showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
                    Shopping Cart
                </h2>

              
                {cartData.length > 0 ? (
                    <ul className="space-y-4">
                        {cartData.map((ele) => (
                            <li key={ele.id} className="flex justify-between items-center border-b pb-3">
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{ele.name}</p>
                                    <p className="text-sm text-gray-500">₹{ele.price} x {ele.qty}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button  onClick={(()=>minusHandler(ele))}  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                                        −
                                    </button>
                                    <span className="px-3 py-1 bg-gray-100 rounded">{ele.qty}</span>
                                    <button onClick={(()=>plusHandler(ele))} className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-700 text-center">Your cart is empty.</p>
                )}

  
                {cartData.length > 0 && (
                    <div className="mt-6 text-lg font-semibold text-gray-800 flex justify-between border-t pt-3">
                        <span>Total Amount:</span>
                        <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                )}

     
                <div className="mt-6 flex justify-between">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    {cartData.length > 0 && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                            Order
                        </button>
                    )}
                </div>
            </div>
        </>,
        document.getElementById("backdrop")
    );
}

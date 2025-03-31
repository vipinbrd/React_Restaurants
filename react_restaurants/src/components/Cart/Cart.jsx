import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../Store/CartData";

export function Cart({ onClose }) {
    const [showModal, setShowModal] = useState(false);
    const{cartData}=useContext(CartContext)

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 200);
    }, []);

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                    showModal ? "opacity-100" : "opacity-0"
                }`}
              
            ></div>

            {/* Modal */}
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                    showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                
                {cartData.map((ele)=>{
                    return(
                        <>
                        <p className="text-lg font-semibold">Dish Name</p>
                <div className="mt-2">
                    <p className="text-gray-700">Total Amount</p>
                    <p className="text-xl font-bold">₹400</p>
                </div>
                <div className="mt-4 flex gap-2">
                    <button onClick={()=>onClose()} className="px-4 py-2 bg-red-500 text-white rounded">
                        Close
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Order</button>
                </div>
                </>
                    )
                })}
            </div>
        </>,
        document.getElementById("backdrop") // ✅ Use `getElementById`
    );
}

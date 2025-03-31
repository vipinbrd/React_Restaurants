import { Children, createContext, useState } from "react";

export const CartContext=createContext({});

export function  CartProvider({children}){
   const[cartData,setCartData]=useState([]);
   function insertItem(ele){
    console.log("shourya Barode")

    let find=false
    const newData=cartData.map((cur)=>{
       if(cur.id==ele.id){
        find=true
        return {...cur,qty:ele.qty}
       }
       else{
        return cur;
       }
    })

    if(!find){
      setCartData((pre)=>{
        return [...pre,ele];
    })

  }
  else{
    setCartData(newData)
  }
   } 
  function deleteItem(itemId){
    setCartData((pre)=>{
        return pre.filter((ele)=>{
            return ele.id!==itemId;
        })
    })
  }
  
  return <CartContext.Provider value={{cartData,insertItem,deleteItem}}>{children}</CartContext.Provider>
}
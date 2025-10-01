"use client";
import { useState } from "react";




export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1);
        }

      
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }

    }


    return (

        <div className="flex justify-center items-center gap-3 bg-white p-3 rounded mx-auto w-40 h-15 shadow ">
            <div className="text-black bg-gray-300 px-4 py-2 rounded ">{quantity}</div>
           
           
            <button 
            onClick={decrement} className={
                quantity == 1 ? "bg-gray-200 font-bold text-black px-4 py-2 rounded-lg transition cursor-not-allowed" :
                "bg-blue-500 font-bold text-black hover:bg-blue-950 active:bg-gray-700 px-4 py-2 rounded-lg transition"
            }
            >
              -
            </button>
           
            <button 
            onClick={increment} className={
                quantity == 20 ? "bg-gray-200 font-bold text-black px-4 py-2 rounded-lg transition cursor-not-allowed" :
                "bg-blue-500 font-bold text-black hover:bg-blue-950 active:bg-gray-700 px-4 py-2 rounded-lg transition"
            }
            >
            
        
                +
            
            </button>

        </div>
    );  
}
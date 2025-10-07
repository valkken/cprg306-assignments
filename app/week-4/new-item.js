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
        <section className="flex flex-col justify-center items-center mt-5">
         {/* Quantity Selector */}
          <div className="flex items-center justify-center gap-3 bg-white p-2 w-40 rounded shadow">
            <div className=" w-10 h-10 flex items-center justify-center text-black bg-white border-1  rounded ">
              {quantity}
            </div>
            <button
              type="button"
              onClick={decrement}
              className={`px-4 py-2 rounded font-bold text-white transition-colors
                ${quantity == 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`
              }
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              className={`px-4 py-2 rounded font-bold text-white transition-colors
                ${quantity == 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`
              }
             
            >
              +
            </button>
          </div>
        </section>
    );  
}
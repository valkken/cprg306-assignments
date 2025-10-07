"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let shoppingList = { name, category, quantity };
    console.log("Item added:", shoppingList);
    alert(`Item added: ${name}, Category: ${category}, Quantity: ${quantity}`);
    //reset to initial values/state
    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-5 mt-20 bg-white p-4 rounded mx-auto w-80 shadow ">
      {/* Start of Form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 ">
        {/* Item Name Input */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          required
          className="border border-gray-400 text-black caret-black placeholder-gray-500 rounded px-2 py-1 w-full"
        />

        {/* row with quantity selector (left) and category selector (right) */}

        <div className="flex justify-between items-center gap-2">
          {/* Quantity Selector */}

          <div className=" w-12 h-10 flex font-extrabold items-center justify-center text-black bg-white border border-gray-400  rounded ">
            {quantity}
          </div>
          <button
            type="button"
            onClick={decrement}
            className={`px-4 py-2 rounded font-bold text-white transition-colors
                ${
                  quantity == 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:text-black hover:bg-blue-600 active:bg-blue-800 transition-colors"
                }`}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={`px-4 py-2 rounded font-bold text-white transition-colors
                ${
                  quantity == 20
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:text-black hover:bg-blue-600 active:bg-blue-800 transition-colors"
                }`}
          >
            +
          </button>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-400 text-black rounded px-2 py-1 w-36 h-10"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Pantry">Pantry</option>
            <option value="Frozen">Frozen</option>
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 font-bold w-full  text-gray-900 hover:bg-blue-600 hover:text-white active:bg-blue-800 px-4 py-2 rounded-lg transition-colors "
        >
          Add Item
        </button>
      </form>
    </section>
  );
}

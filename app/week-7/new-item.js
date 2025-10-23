"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  // const [name, setName] = useState("");
  // const [category, setCategory] = useState("Produce");
  // const [quantity, setQuantity] = useState(1);
  //combine states into a single state object
  const [item, setItem] = useState({
    name: "",
    category: "Produce",
    quantity: 1,
  });

  const increment = () => {
    if (item.quantity < 20) {
      setItem({ ...item, quantity: item.quantity + 1 });
    }
  };

  const decrement = () => {
    if (item.quantity > 1) {
      setItem({ ...item, quantity: item.quantity - 1 });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now(); //simple unique id based on timestamp
    //create new item object with id
    let newItem = { id, ...item };
    onAddItem(newItem); //pass the new item to the parent component

    console.log("Item added:", newItem);
    //reset to initial values/state
    setItem({
      name: "",
      category: "Produce",
      quantity: 1,
    });
  };

  return (
    <section className="flex flex-col  justify-center items-center gap-5 mt-5 mb-10 bg-white p-4 rounded mx-auto w-80 shadow ">
      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 ">
        {/* item name input */}
        <input
          type="text"
          id="name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          placeholder="Item Name"
          required
          className="border border-gray-400 text-black caret-black placeholder-gray-500 rounded px-2 py-1 w-full"
        />

        {/* row with quantity (left) and category selector (right) */}

        <div className="flex justify-between items-center gap-2">
          {/* Quantity Selector */}

          <div className=" w-12 h-10 flex font-extrabold items-center justify-center text-black bg-white border border-gray-400  rounded ">
            {item.quantity}
          </div>
          <button
            type="button"
            onClick={decrement}
            className={`px-4 py-2 rounded font-bold text-white transition-colors
                ${
                  item.quantity == 1
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
                  item.quantity == 20
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:text-black hover:bg-blue-600 active:bg-blue-800 transition-colors"
                }`}
          >
            +
          </button>

          <select
            id="category"
            value={item.category}
            onChange={(e) => setItem({ ...item, category: e.target.value })}
            className="border border-gray-400 text-black rounded px-2 py-1 w-36 h-10"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Others">Others</option>
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

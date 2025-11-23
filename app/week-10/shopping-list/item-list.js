"use client";
import { useState } from "react";
import Item from "./item";


export default function ItemList({ itemsProp, onSelectItem }) {
  const [sortBy, setSortBy] = useState("name"); //default sort by name

  // let itemsCopy = [...itemsData];//create a copy of the items array to sort

  //sort the items based on the sortBy state

  itemsProp.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  



  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setSortBy("name")}
          className={`m-2 p-2 text-white font-bold rounded transition-colors ${
            sortBy === "name"
              ? "bg-emerald-800"
              : "bg-emerald-500 hover:bg-emerald-600 cursor-pointer"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`m-2 p-2  text-white font-bold rounded  transition-colors ${
            sortBy === "category"
              ? "bg-sky-800"
              : "bg-sky-500 hover:bg-sky-600 cursor-pointer"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        {itemsProp.map((item) => (
          <Item key={item.id} item={item} onSelect={() => onSelectItem(item)} />  
        ))}
      </div>
    </>
  );
}

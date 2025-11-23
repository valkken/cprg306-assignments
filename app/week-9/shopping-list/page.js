"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
export default function Page() {
  //state to hold the list of items
  const [items, setItems] = useState(itemsData);

  const { user } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (item) => {
    console.log("Selected item:", item);
    setSelectedItemName(item.name);
  };


  if(!user){
    return (
      <main className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-extrabold text-4xl font-serif text-center p-5">
          Please log in to access the Shopping List
        </h1>
        {/*redirect to week-9 page for login */}
        <a href="/week-9" className="text-blue-500 underline">
          Go to Login Page
        </a>
      </main>
    );
  }
  return (
    
    <main>
      <h1 className="font-extrabold text-4xl font-serif text-center p-5">
        Shopping List
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start mr-50">
        <div className="flex-1 ml-60">
          <NewItem onAddItem={handleAddItem} />
          <ItemList itemsProp={items} onSelectItem={handleItemSelect} />
        </div>

        <div className="flex-1 ">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

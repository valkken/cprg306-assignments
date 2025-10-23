"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
export default function Page() {
  //state to hold the list of items
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="font-extrabold text-4xl font-serif text-center p-5">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList itemsProp={items} />
    </main>
  );
}

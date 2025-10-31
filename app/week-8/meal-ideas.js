"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMealIdeas] = useState([]);

  const trimIngredient = (name) => {
    if (!name) return "";
    return name
      .replace(/[^\p{L}\s]/gu, "") // Remove non-letter characters
      .trim()
      .split(" ")[0] // Take the first word
      .toLowerCase();
  };

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const trimmed = trimIngredient(ingredient);
      const meal = await fetchMealIdeas(trimmed);

      setMealIdeas(meal);
    }
  };
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
  return (
    <div>
      <h2 className="font-bold text-2xl my-4 text-center">
        Meal Ideas{" "}
        {ingredient
          ? `for "${trimIngredient(ingredient)}"`
          : "(Select an item)"}{" "}
      </h2>
      {mealIdeas.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mealIdeas.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex flex-col items-center rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-32 h-32 rounded"
              />
              <h3 className="font-semibold mt-2 text-center">{meal.strMeal}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p className="italic text-gray-600">
          {ingredient
            ? `No meal ideas found.`
            : "Select an item to see meal ideas."}
        </p>
      )}
    </div>
  );
}

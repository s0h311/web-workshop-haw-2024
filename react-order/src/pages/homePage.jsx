import "./homePage.css";
import { useEffect, useState } from "react";
import DishForm from "../../components/DishForm";
import { DishList } from "../../components/DishList";

export default function HomePage() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("https://web-workshop-haw-2024.vercel.app/dish", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => setDishes(r));
  }, []);

  function handleDishAdd(dish) {
    setDishes((currentDishes) => [
      ...currentDishes,
      { id: String(Math.random()), ...dish },
    ]);
  }

  return (
    <main className="container">
      <h1>Dishes</h1>

      <DishForm onDishAdd={handleDishAdd} />

      <DishList dishes={dishes} />
    </main>
  );
}

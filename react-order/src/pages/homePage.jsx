import { useEffect, useState } from "react";
import "./homePage.css";

export default function HomePage() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dish", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => setDishes(r));
  }, []);

  async function addDish(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const dish = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
    };

    const imageUrl = formData.get("imageUrl");

    if (imageUrl) {
      dish.imageUrl = imageUrl;
    }

    setDishes((currentDishes) => [
      ...currentDishes,
      {
        id: String(Math.random()),
        ...dish,
      },
    ]);

    fetch("http://localhost:3000/dish", {
      method: "POST",
      body: JSON.stringify(dish),
    });
  }

  return (
    <main>
      <h1>Dishes</h1>

      <form onSubmit={(e) => addDish(e)}>
        <input type="text" placeholder="name" name="name" />
        <input type="number" placeholder="price" name="price" />
        <input type="text" placeholder="imageUrl" name="imageUrl" />

        <button type="submit">Add</button>
      </form>

      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{JSON.stringify(dish)}</li>
        ))}
      </ul>
    </main>
  );
}

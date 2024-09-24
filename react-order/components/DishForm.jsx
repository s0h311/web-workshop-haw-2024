import { useState } from "react";
import "./DishForm.css";

export default function DishForm({ onDishAdd }) {
  const [loading, setLoading] = useState(false);

  async function addDish(event) {
    event.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const form = event.target;

    const formData = new FormData(form);

    const dish = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
    };

    const imageUrl = formData.get("imageUrl");

    if (imageUrl) {
      dish.imageUrl = imageUrl;
    }

    setLoading(true);

    fetch("https://web-workshop-haw-2024.vercel.app/dish", {
      method: "POST",
      body: JSON.stringify(dish),
    })
      .then((r) => r.json())
      .then((r) => {
        setTimeout(() => {
          onDishAdd(r);
          setLoading(false);
        }, 1000);
      });

    form.reset();
  }

  return (
    <form className="dishForm" onSubmit={(e) => addDish(e)}>
      <input type="text" placeholder="name" name="name" />
      <input type="number" placeholder="price" name="price" />
      <input type="text" placeholder="imageUrl" name="imageUrl" />

      <button className="submit-button" type="submit">
        Add
        {loading && <img className="loading-spinner" src="/loading.gif" />}
      </button>
    </form>
  );
}

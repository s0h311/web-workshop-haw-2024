import "./DishList.css";

import { DishCard } from "./DishCard";

export function DishList({ dishes }) {
  return (
    <ul className="dishList">
      {dishes.map((dish) => (
        <DishCard dish={dish} key={dish.id} />
      ))}
    </ul>
  );
}

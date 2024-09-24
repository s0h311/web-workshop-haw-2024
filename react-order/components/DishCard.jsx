import "./DishCard.css";

export function DishCard({ dish }) {
  return (
    <li className="dish">
      <img src={dish.imageUrl} />
      <div>{dish.name}</div>
      <div>{dish.price}</div>
    </li>
  );
}

import { insertDish } from "./service";
import { Dish } from "./types";

export default defineEventHandler(async (event) => {
  const rawDish: Omit<Dish, "id"> = await readValidatedBody(event, (body) => {
    return validateDish(JSON.parse(body));
  });

  return await insertDish(JSON.parse(rawDish));
});

function validateDish(dish: any): boolean {
  return (
    dish.name !== undefined &&
    dish.name.length > 2 &&
    dish.price !== undefined &&
    dish.price > 0 &&
    (dish.imageUrl === undefined || isUrl(dish.imageUrl))
  );
}

function isUrl(str: string): boolean {
  try {
    new URL(str);
  } catch (_) {
    return false;
  }

  return true;
}

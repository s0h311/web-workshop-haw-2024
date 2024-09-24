import { Dish } from "./types";

export default defineEventHandler(async (event) => {
  const rawDish: Omit<Dish, "id"> = await readValidatedBody(event, (body) =>
    validateDish(JSON.parse(body))
  );

  const dishStorage = useStorage("dish");

  const hasDishes = await dishStorage.has("dishes");

  if (!hasDishes) {
    dishStorage.set("dishes", []);
  }

  const dishes = await dishStorage.get<Dish[]>("dishes");

  const dish: Dish = {
    id: crypto.randomUUID(),
    ...JSON.parse(rawDish),
  };

  await dishStorage.set("dishes", [...dishes, dish]);

  return dish;
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

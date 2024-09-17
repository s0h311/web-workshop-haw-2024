import { Dish } from "./types";

export default defineEventHandler(async (_event) => {
  const dishStorage = useStorage("dish");
  const dishes = await dishStorage.get<Dish[]>("dishes");

  return dishes ?? [];
});

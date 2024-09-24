import { selectDish } from "./service";
import { Dish } from "./types";

export default defineEventHandler(async (_event) => {
  return await selectDish();
});

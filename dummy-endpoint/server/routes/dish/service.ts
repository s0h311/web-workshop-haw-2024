import { neon } from "@neondatabase/serverless";
import { Dish } from "./types";

const sql = neon(process.env.NEON_CONNECTION_URL);

export async function insertDish(dish: Dish): Promise<void> {
  await sql(
    `INSERT INTO dish (name, price, image_url) values ('${dish.name}', ${
      dish.price
    }, ${dish.imageUrl ?? null});`
  );
}

export async function selectDish(): Promise<Dish[]> {
  return (await sql("SELECT * FROM dish;")) as Dish[];
}

export async function deleteDish(): Promise<void> {
  await sql("DELETE FROM dish;");
}

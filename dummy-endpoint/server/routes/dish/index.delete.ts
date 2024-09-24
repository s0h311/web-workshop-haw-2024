import { deleteDish } from "./service";

export default defineEventHandler(async (_event) => {
  await deleteDish();
});

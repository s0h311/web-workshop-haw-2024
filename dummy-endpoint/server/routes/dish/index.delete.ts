export default defineEventHandler(async (_event) => {
  const dishStorage = useStorage("dish");
  await dishStorage.set("dishes", []);
});

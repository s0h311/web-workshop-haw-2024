//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    "/dish": {
      cors: true,
    },
  },
});

import { createServer } from "./server";

const PORT = process.env.PORT ?? 4000;
const server = createServer();

server.listen(PORT, () => {
  console.log(`🚀 API running on ${PORT} ✅`);
});

import { createServer } from "./server";

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`api running on ${port}`);
});

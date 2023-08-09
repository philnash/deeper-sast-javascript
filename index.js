import { port, host } from "./src/config.js";
import { app } from "./src/server.js";

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

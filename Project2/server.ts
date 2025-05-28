import { config } from "dotenv";
config();

import app from "./src/app";
import { envconfig } from "./src/config/Config";

const startserver = () => {
  const port = envconfig.portNumber;
  app.listen(port, function () {
    console.log("Server has started on " + port);
  });
};

startserver();

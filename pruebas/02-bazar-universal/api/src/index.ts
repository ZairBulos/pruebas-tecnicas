import app from "./app";
import http from "http";
import logger from "./utils/logger";
import { PORT } from "./utils/config";

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

import logger from "./logger";
import { Request, Response, NextFunction } from "express";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  next();
};

const middlawere = {
  requestLogger,
};

export default middlawere;

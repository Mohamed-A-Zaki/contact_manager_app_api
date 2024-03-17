import { ErrorRequestHandler } from "express";

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).send({
    message: err.message,
    stack: err.stack,
  });
};

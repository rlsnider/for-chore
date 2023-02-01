import {Request, Response } from 'express';

const errorHandler = (err: { message: any; stack: any }, req: Request, res: Response, next: Function) => {
  const statusCode = res.statusCode ? res.statusCode : 500
  res.status(statusCode)
  res.json({ 
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
  errorHandler,
}
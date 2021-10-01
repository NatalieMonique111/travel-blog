import express from "express";

import * as db from "./db.mjs";

const commentRouter = express.Router();

commentRouter.get("/", async (request, response) => {
  const comments = await db.getComments();
  response.json(comments);
});

commentRouter.use(express.json());
commentRouter.post("/", async (request, response) => {
  const comment = await db.addComment(request.body);
  response.status(201).json(comment);
});

export default commentRouter;

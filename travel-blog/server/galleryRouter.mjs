import express from "express";

import * as db from "./db.mjs";

const galleryRouter = express.Router();

galleryRouter.get("/", async (request, response) => {
  const gallery = await db.getGallery();
  response.json(gallery);
});

// featureRouter.use(express.json());
// featureRouter.post("/", async (request, response) => {
//   const feature = await db.addFeature(request.body.name);
//   response.status(201).json(feature);
// });

export default galleryRouter;

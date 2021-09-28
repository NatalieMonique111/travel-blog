import express from "express";

import * as db from "./db.mjs";

const featureRouter = express.Router();

featureRouter.get("/", async (request, response) => {
  const features = await db.getFeatures();
  response.json(features);
});

// featureRouter.use(express.json());
// featureRouter.post("/", async (request, response) => {
//   const feature = await db.addFeature(request.body.name);
//   response.status(201).json(feature);
// });

export default featureRouter;

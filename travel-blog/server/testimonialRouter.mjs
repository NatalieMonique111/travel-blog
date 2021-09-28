import express from "express";

import * as db from "./db.mjs";

const testimonialRouter = express.Router();

testimonialRouter.get("/", async (request, response) => {
  const testimonials = await db.getTestimonials();
  response.json(testimonials);
});

// featureRouter.use(express.json());
// featureRouter.post("/", async (request, response) => {
//   const feature = await db.addFeature(request.body.name);
//   response.status(201).json(feature);
// });

export default testimonialRouter;

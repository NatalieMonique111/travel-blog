import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getComments = () => db.any("SELECT * FROM comments");

export const addComment = (comment) =>
  db.one("INSERT INTO comments(comment, username) VALUES($<comment>, $<username>) RETURNING *", comment );

  export const getFeatures = () => db.any("SELECT * FROM features");
  export const getTestimonials = () => db.any("SELECT * FROM testimonials");
  export const getGallery = () => db.any("SELECT * FROM gallery");

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}

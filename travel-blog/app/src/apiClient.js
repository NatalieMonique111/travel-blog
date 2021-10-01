
export const getComments = () => _get("/api/comments");

export const addComment = (comment) => _post("/api/comments", comment);

export const getFeatures = () => _get("/api/features");
export const getTestimonials = () => _get("/api/testimonials");
export const getGallery = () => _get("/api/gallery");



const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  console.log('comment: ', body);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};

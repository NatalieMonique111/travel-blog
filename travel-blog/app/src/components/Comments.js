import * as React from "react";

import * as apiClient from "../apiClient";

const Comments = () => {
  const [comments, setComments] = React.useState([]);

  const loadComments = async () => setComments(await apiClient.getComments());
  const addComment = (comment) => apiClient.addComment(comment).then(loadComments);

  React.useEffect(() => {
    loadComments();
  }, []);

  return (
    <div id= 'comments' className='container'>
    <section className='section-title text-center'>
      <h2> Comments </h2>
      <CommentList comments={comments} />
      <AddComment {...{ addComment}} />
    </section>
    </div>
  );
};

const CommentList = ({ comments }) => (
  
  <ul className="comment-list">
    {comments.map(({ id, comment, username }) => (
      <li className="list-el" key={id}>"{comment}"<b> {username}</b></li>
    ))}
  </ul>
);

const AddComment = ({ addComment }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;
    const comment = Object.fromEntries(new FormData(form).entries());

    e.preventDefault();
    addComment(comment);
    form.reset();
  };

  return (
    <div id= 'comments-form'>
    <form  {...{onSubmit}}>
      <div className='form'>
      <label >
         Comment:{" "}
        <input name="comment" required/>
      </label>
      <label>
        User name:
        <input name="username" required />
      </label>
      </div>
      <button className='btn-custom'>Post Comment</button>
    </form>
    </div>
    
  );
};

export default Comments;


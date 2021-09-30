import * as React from "react";

import * as apiClient from "./apiClient";



const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);

  const loadTasks = async () => setTasks(await apiClient.getTasks());
  const addTask = (task) => apiClient.addTask(task).then(loadTasks);

  React.useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className='container'>
    <section className='section-title text-center'>
      <h2> Comments </h2>
      <TaskList tasks={tasks} />
      <AddTask {...{ addTask }} />
    </section>
    </div>
  );
};

const TaskList = ({ tasks }) => (
  
  <ul className="comment-list">
    {tasks.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

const AddTask = ({ addTask }) => {
  const [task, setTask] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addTask(task);
      setTask("");
    }
  };

  return (
    
    <form  onSubmit={onSubmit}>
      <div className='form'>
      <label >
         Comment:{" "}
        <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
      </label>
      <label >
        User name:{" "}
        <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
      </label>
      </div>
      <button className='btn-custom' disabled={!canAdd}>Post Comment</button>
    </form>
    
    
  );
};

export default Tasks;

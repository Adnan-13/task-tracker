import Task from './Task.js';

const Tasks = ({ tasks, onDelete, onReminderToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onReminderToggle={onReminderToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

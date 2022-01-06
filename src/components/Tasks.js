import Task from './Task.js';

const Tasks = ({ tasks, onDelete, onReminderToggle, onEdit }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onReminderToggle={onReminderToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

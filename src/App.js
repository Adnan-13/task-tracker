import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useState } from 'react';
import AddTask from './components/AddTask.js';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskId, setTaskId] = useState(6);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to office',
      date: '2022-01-11T14:26',
      reminder: true,
    },
    {
      id: 2,
      text: 'Go to Mymensingh',
      date: '2022-01-11T14:26',
      reminder: false,
    },
    {
      id: 3,
      text: 'Talk to parvez',
      date: '2022-01-11T14:26',
      reminder: false,
    },
    {
      id: 4,
      text: 'Sleep well',
      date: '2022-01-11T14:26',
      reminder: false,
    },
    {
      id: 5,
      text: 'Wake up',
      date: '2022-01-11T14:26',
      reminder: true,
    },
  ]);

  //add task
  const addTask = (task) => {
    const newTask = { id: taskId, ...task };
    setTaskId(taskId + 1);
    setTasks([...tasks, newTask]);
  };

  //edit task
  const editTask = (editedTask) => {
    // console.log(editedTask);
    var modifiedTasks = [];
    tasks.forEach((i) => {
      editedTask.id === i.id
        ? modifiedTasks.push(editedTask)
        : modifiedTasks.push(i);
    });

    setTasks(modifiedTasks);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //reminder toggle
  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const onAddToggle = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <div>
      <div className='container'>
        <Header onAddToggle={onAddToggle} showAddTask={showAddTask} />
        {showAddTask ? <AddTask onAdd={addTask} /> : ''}
        {tasks.length > 0 ? (
          <>
            <p style={{ fontSize: 14 }}>
              The left green border indicates if reminder is set or not. Double
              click a task to set/remove reminder
            </p>
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onEdit={editTask}
              onReminderToggle={setReminder}
            />
          </>
        ) : (
          'No tasks to show'
        )}
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};
export default App;

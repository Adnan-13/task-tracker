import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useEffect, useState } from 'react';
import EditTask from './components/EditTask.js';

const BASE_URL = 'http://localhost:5000';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  //get all tasks from server
  const fetchTasks = async () => {
    const res = await fetch(`${BASE_URL}/tasks`);

    return await res.json();
  };

  //get a task with specified id
  const fetchTask = async (id) => {
    const res = await fetch(`${BASE_URL}/tasks/${id}`);

    return await res.json();
  };

  const getCurrentBdTime = () => {
    const d = new Date();
    const tzDiff = 12 * 60 + d.getTimezoneOffset();

    const currentDateTime = new Date(d.getTime() + tzDiff * 60 * 1000)
      .toISOString()
      .slice(0, 16);

    return currentDateTime;
  };

  //add task
  const addTask = async (task) => {
    // const newTask = { id: taskId, ...task };
    // setTaskId(taskId + 1);
    // setTasks([...tasks, newTask]);
    task = {
      text: task.text,
      date: task.date,
      reminder: task.reminder,
    };

    const currentDateTime = getCurrentBdTime();

    if (!task.date) task.date = currentDateTime;

    const res = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //edit task
  const editTask = async (editedTask) => {
    const currentDateTime = new Date().toISOString().slice(0, 16);
    if (!editedTask.date) editedTask.date = currentDateTime;

    await fetch(`${BASE_URL}/tasks/${editedTask.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(editedTask),
    });
    setTasks(await fetchTasks());
  };

  //edit task field value
  const editTaskField = async (id, field, value) => {
    const taskToEdit = await fetchTask(id);

    taskToEdit[field] = value;

    await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(taskToEdit),
    });
    setTasks(await fetchTasks());
  };

  // delete task
  const deleteTask = async (id) => {
    await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //reminder toggle
  const setReminder = async (id) => {
    const currentTask = await fetchTask(id);

    await editTaskField(id, 'reminder', !currentTask.reminder);

    setTasks(await fetchTasks());

    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: !task.reminder } : task
    //   )
    // );
  };

  const onAddToggle = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <div>
      <div className='container'>
        <Header onAddToggle={onAddToggle} showAddTask={showAddTask} />
        {showAddTask ? (
          <EditTask
            onEdit={addTask}
            componentType={1}
            addEditBox={setShowAddTask}
          />
        ) : (
          ''
        )}
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

import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to office',
      day: 'Jan 6th at 9:30AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Go to Mymensingh',
      day: 'Jan 6th at 6:30PM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Talk to parvez',
      day: 'Jan 6th at 11:30PM',
      reminder: true,
    },
    {
      id: 4,
      text: 'Sleep well',
      day: 'Jan 7th at 12:30AM',
      reminder: false,
    },
    {
      id: 5,
      text: 'Wake up',
      day: 'Jan 7th at 8:00AM',
      reminder: true,
    },
  ]);

  // delete task
  const deleteTask = (id) => {
    console.log('Delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className='container'>
        <Header />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
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

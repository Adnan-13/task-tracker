import React, { useState } from 'react';

import { FaRegEdit, FaTimes } from 'react-icons/fa';
import EditTask from './EditTask.js';

const Task = ({ task, onDelete, onReminderToggle, onEdit }) => {
  const [showEditTask, setShowEditTask] = useState(false);
  return (
    <>
      <div
        className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => onReminderToggle(task.id)}
      >
        <h3>
          {task.text}
          <div className='task button-holder'>
            <FaTimes
              onClick={() => onDelete(task.id)}
              style={{ color: 'red', cursor: 'pointer' }}
            />
            <FaRegEdit
              onClick={() => setShowEditTask(!showEditTask)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </h3>
        <p> {task.date} </p>
      </div>
      {showEditTask ? <EditTask task={task} onEdit={onEdit} /> : ''}
    </>
  );
};

export default Task;

import React, { useState } from 'react';

import { FaRegEdit, FaTimes } from 'react-icons/fa';
import EditTask from './EditTask.js';

const Task = ({ task, onDelete, onReminderToggle, onEdit }) => {
  const [showEditTask, setShowEditTask] = useState(false);
  let formatedDate = task.date.split('T');
  formatedDate = formatedDate[0] + ' at ' + formatedDate[1];
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
        <p> {formatedDate} </p>
      </div>
      {showEditTask ? (
        <EditTask task={task} onEdit={onEdit} editTaskField={setShowEditTask} />
      ) : (
        ''
      )}
    </>
  );
};

export default Task;

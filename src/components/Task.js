import React, { useState } from 'react';

import { FaRegEdit, FaTimes } from 'react-icons/fa';
import DeleteModal from './DeleteModal.js';
import EditTask from './EditTask.js';

const Task = ({ task, onDelete, onReminderToggle, onEdit }) => {
  const [showEditTask, setShowEditTask] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
              onClick={() => setShowDeleteModal(!showDeleteModal)}
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
      {showDeleteModal && (
        <DeleteModal
          task={task}
          onDelete={onDelete}
          onDontDelete={setShowDeleteModal}
        />
      )}
      {showEditTask && (
        <EditTask task={task} onEdit={onEdit} editTaskField={setShowEditTask} />
      )}
    </>
  );
};

export default Task;

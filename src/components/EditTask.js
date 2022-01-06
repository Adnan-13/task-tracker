import React, { useState } from 'react';

const EditTask = ({ task, onEdit }) => {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [reminder, setReminder] = useState(task.reminder);

  const theID = task.id;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onEdit({ id: theID, text, date, reminder });
  };

  return (
    <div style={{ border: '1px solid steelblue' }}>
      <form className='add-form' style={{ margin: '15px' }} onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label>Date and Time</label>
          <input
            type='text'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input
            type='checkbox'
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input className='btn btn-block' type='submit' value='Save Changes' />
      </form>
    </div>
  );
};

export default EditTask;

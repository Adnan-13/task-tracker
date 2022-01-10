import React, { useState } from 'react';

const EditTask = ({ task, onEdit, editTaskField }) => {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [reminder, setReminder] = useState(task.reminder);
  const [emptyTaskAlert, setEmptyTaskAlert] = useState(false);

  const theID = task.id;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setEmptyTaskAlert(true);
      return;
    }

    // let formatedDate = date.split('T');
    // formatedDate = formatedDate[0] + ' at ' + formatedDate[1];

    onEdit({ id: theID, text, date, reminder });
    editTaskField(false);
  };

  return (
    <div style={{ border: '1px solid steelblue' }}>
      <form className='add-form' style={{ margin: '15px' }} onSubmit={onSubmit}>
        <div className='form-control'>
          <label>
            Task<span>*</span>
          </label>
          {emptyTaskAlert && (
            <p style={{ fontSize: 13, color: 'red' }}>
              Task field should not be empty
            </p>
          )}
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label>Date and Time</label>
          <input
            type='datetime-local'
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

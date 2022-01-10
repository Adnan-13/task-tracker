import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);
  const [emptyTaskAlert, setEmptyTaskAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length <= 0) {
      setEmptyTaskAlert(true);
      return;
    }

    // let formatedDate = date.split('T');
    // formatedDate = formatedDate[0] + ' at ' + formatedDate[1];
    onAdd({ text, date, reminder });

    setText('');
    setDate('');
    setReminder(false);
    setEmptyTaskAlert(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
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
          placeholder='Add task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Date and Time</label>
        <input
          type='datetime-local'
          placeholder='Add Date and time'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;

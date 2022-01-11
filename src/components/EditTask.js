import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
const EditTask = ({
  task = {
    id: -1,
    text: '',
    date: '',
    reminder: false,
  },
  onEdit,
  addEditBox = () => {},
  componentType = 0,
}) => {
  const [isEdit, setIsEdit] = useState(componentType === 0 ? true : false);
  const [text, setText] = useState(isEdit ? task.text : '');
  const [date, setDate] = useState(isEdit ? task.date : '');
  const [reminder, setReminder] = useState(isEdit ? task.reminder : false);
  const [emptyTaskAlert, setEmptyTaskAlert] = useState(false);

  const theID = task.id;

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length <= 0) {
      setEmptyTaskAlert(true);
      return;
    }

    // let formatedDate = date.split('T');
    // formatedDate = formatedDate[0] + ' at ' + formatedDate[1];

    if (onEdit) {
      onEdit({ id: theID, text, date, reminder });
      addEditBox(false);
    } else {
      onEdit({ text, date, reminder });
      setText('');
      setDate('');
      setReminder(false);
      setEmptyTaskAlert(false);
    }
  };

  return (
    <div style={{ border: '1px solid steelblue' }}>
      <form className='add-form' style={{ margin: '15px' }} onSubmit={onSubmit}>
        <div className='form-control'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>
              Task<span>*</span>
            </label>
            <AiOutlineCloseSquare
              onClick={() => addEditBox(false)}
              style={{
                cursor: 'pointer',
                color: 'red',
              }}
              size={'5%'}
              // onClick={addEditBox(false)}
            />
          </div>
          <input
            style={{
              borderColor: emptyTaskAlert && 'red',
              borderRadius: '8px',
            }}
            type='text'
            value={text}
            placeholder='Add task'
            onChange={(e) => {
              setText(e.target.value);
              setEmptyTaskAlert(false);
            }}
          />
          {emptyTaskAlert && (
            <p style={{ fontSize: 13, color: 'red' }}>
              Task field should not be empty
            </p>
          )}
        </div>

        <div className='form-control'>
          <label>Date and Time</label>
          <input
            style={{ borderRadius: '8px' }}
            type='datetime-local'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <AiOutlineCloseSquare></AiOutlineCloseSquare>
          <input
            type='checkbox'
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input
          className='btn btn-block'
          type='submit'
          value={isEdit ? 'Save Changes' : 'Save Task'}
        />
      </form>
    </div>
  );
};

export default EditTask;

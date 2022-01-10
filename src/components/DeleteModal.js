const DeleteModal = ({ task, onDelete, onDontDelete }) => {
  return (
    <div className='modal-window'>
      <div className='modal-container'>
        <div className='modal-box'>
          <div className='modal-header'>
            <h2>Are You Sure You Want to Delete?</h2>
          </div>
          <div className='modal-body'>
            <p>
              {`This will delete `}
              <b>{`${task.text} `}</b>
              {`task and there'll be no way to get it back`}
            </p>
          </div>
          <div className='modal-footer'>
            <button
              className='modal-footer btn-yes'
              onClick={() => onDelete(task.id)}
            >
              YES
            </button>
            <button
              className='modal-footer btn-no'
              onClick={() => onDontDelete(false)}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

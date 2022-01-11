import Button from './Button.js';

const Header = ({ title, onAddToggle, showAddTask }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      {!showAddTask && (
        <Button text={'Add'} color={'green'} onClick={onAddToggle} />
      )}
    </header>
  );
};

export default Header;

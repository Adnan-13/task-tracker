import Button from './Button.js';

const Header = ({ title, onAddToggle, showAddTask }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text={showAddTask ? 'Close' : 'Add'}
        color={showAddTask ? 'red' : 'green'}
        onClick={onAddToggle}
      />
    </header>
  );
};

export default Header;

import Button from './Button.js';

const Header = ({ title }) => {
  var count = 0;
  const onClick = () => {
    console.log('Clicked', ++count, 'time(s)');
  };
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' onClick={onClick} />
    </header>
  );
};

export default Header;

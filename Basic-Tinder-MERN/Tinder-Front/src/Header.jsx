import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './header.css';

function Header() {
  return (
    <div className='app-header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header-icon' />
      </IconButton>
      <img
        className='header-logo'
        src='https://st4.depositphotos.com/27316046/39134/v/950/depositphotos_391345810-stock-illustration-cartoon-illustration-with-online-relationships.jpg'
        alt='Tinder Logo'
      />
      <IconButton>
        <ForumIcon fontSize='large' className='header-icon' />
      </IconButton>
    </div>
  );
}

export default Header;
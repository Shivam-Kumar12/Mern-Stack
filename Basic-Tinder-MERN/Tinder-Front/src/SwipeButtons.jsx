import { useState } from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons({ onStarClick, onHeartClick }) {
  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(prev => !prev);
    onHeartClick(); // Notify parent component about heart click
  };

  return (
    <div className='swipe-buttons'>
      <IconButton className="swipe-button rewind">
        <ReplayIcon fontSize="large" style={{ color: '#f5b748' }} />
      </IconButton>
      <IconButton className="swipe-button close">
        <CloseIcon fontSize="large" style={{ color: '#ec5e6f' }} />
      </IconButton>
      <IconButton className="swipe-button star" onClick={onStarClick}>
        <StarRateIcon fontSize="large" style={{ color: '#62b4f9' }} />
      </IconButton>
      <IconButton className="swipe-button favorite" onClick={handleHeartClick}>
        <FavoriteIcon fontSize="large" style={{ color: heartClicked ? '#76e2b3' : '#ccc' }} />
      </IconButton>
      <IconButton className="swipe-button flash">
        <FlashOnIcon fontSize="large" style={{ color: '#915dd1' }} />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;

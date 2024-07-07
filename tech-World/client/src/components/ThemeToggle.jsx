import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDashboardContext } from '../pages/DashboardLayout';
import './ThemeToggle.css'; // Import the CSS file for styling

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <div className={`theme-toggle ${isDarkTheme ? 'dark' : ''}`} onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </div>
  );
};

export default ThemeToggle;

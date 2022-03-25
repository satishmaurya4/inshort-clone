import React from 'react'
import './Theme.css'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { useThemeProviderValue } from '../../context/ThemeContext';

const Theme = () => {
  const { isLight, setIsLight } = useThemeProviderValue();
  console.log('from theme', useThemeProviderValue());
  return (
    <div className='theme-btn-container' style={isLight ? {backgroundColor: '#fff'} : {backgroundColor: '#fff'}}>
      {
        isLight ? 
          <span className='moon-icon' title="Dark Theme" style={{color: '#000'}} onClick={() => setIsLight(!isLight)}><Brightness3Icon /></span>
          :
          <span className='sun-icon' title="Light Theme" style={{color: '#000'}} onClick={() => setIsLight(!isLight)}><WbSunnyIcon /></span>
          
      }
    </div>
  )
}

export default Theme
import React from 'react';
import Switch from 'react-switch';
import { BackgroundContext } from "../../Pages/BackgroundContext"
import { useContext } from 'react';

import './style.scss'

function ToggleButton() {

  
  const  { backgroundFundo ,changeBackground}=useContext(BackgroundContext)
  

  return (
    <Switch
   checked={backgroundFundo}
      onChange={changeBackground}
      uncheckedIcon={false}
      checkedIcon={false}
      
      className={`custom-switch ${backgroundFundo ? '.switch-on .react-switch-bg ' :'switch-off .react-switch-bg'}`}
    />
  );
}

export default ToggleButton;
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./siderow.css";

const SideRow = ({src, Icon, title}) => {
  return (
      <div className = "siderow">
          {src && <AccountCircleIcon src = {src}/>}
          {Icon && <Icon />}
          <h4>{title}</h4>
      </div>
  )
};

export default SideRow;

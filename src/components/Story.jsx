import React from 'react';
import "./story.css";
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
const Story = ({image, profileSrc, title}) => {
  return (
  <div style = {{backgroundImage: `url(${image})`}} className = "story">
      <Avatar src = {profileSrc} />
      <h4>{title}</h4>
  </div>
  );
};

export default Story;

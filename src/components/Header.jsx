import React from 'react';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Header = () => {
  return (
  <div className = "header">
<div className = "left__header">
  <img src = "data:image/jpeg;base64,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"
   alt = ""/>
    <div className = "header__input">
    <SearchIcon />
    <input placeholder = "Search Facebook" type = "text" />
    </div>

</div>

<div className = "middle__header">
    <div className = "header__option header__option--active">
        <HomeIcon fontSize = "large" />
    </div>
    <div className = "header__option">
        <LiveTvIcon fontSize = "large" />
    </div>
    <div className = "header__option">
        <StorefrontIcon fontSize = "large" />
    </div>
    <div className = "header__option">
        <GroupsIcon fontSize = "large" />
    </div>




</div>

<div className = "right__header">
    <div className = "header__info">
        <AccountCircleIcon fontSize = "large" />
        <h4>Machumi</h4>
    </div>
    <div className = "header__info">
        <AddCircleIcon fontSize = "large" />
    </div>
    <div className = "header__info">
        <MessageIcon fontSize = "large" />
    </div>
    <div className = "header__info">
        <NotificationsIcon fontSize = "large" />
    </div>
    <div className = "header__info">
        <ArrowDropDownCircleIcon fontSize = "large" />
    </div>
    
    </div>

  </div>
  );
};

export default Header;

import React from 'react';
import "./sidebar.css";
import SideRow from "../components/SideRow";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LayersIcon from '@mui/icons-material/Layers';

const Sidebar = () => {
  return(
      <div className = "sidebar">
          <SideRow src = "https://lh3.googleusercontent.com/ogw/ADea4I5OK9YpI5jg-qfuZbQRF1rd7FmpfEQu_puXitmtPg=s32-c-mo" 
          title= "Machumi" />
          <SideRow Icon = {LocalHospitalIcon} title = "Covid 19 Information Center" />
          <SideRow Icon = {PeopleIcon} title = "Friends" />
          <SideRow Icon = {GroupsIcon} title = "Groups" />
          <SideRow Icon = {EmojiFlagsIcon} title = "Pages" />
          <SideRow Icon = {SmartDisplayIcon} title = "Watch" />
          <SideRow Icon = {StorefrontIcon} title = "Market Place" />
          <SideRow Icon = {WatchLaterIcon} title = "Memories" />
          <SideRow Icon = {BookmarkIcon} title = "Save" />
          <SideRow Icon = {LayersIcon} title = "Steps" />
          


      </div>
  )
};

export default Sidebar;

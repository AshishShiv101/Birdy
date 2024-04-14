import React from 'react';
import "./Sidebar.css";
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from './SidebarOption';
import {Button} from "@mui/material"
function Sidebar() {
  return (
    <>
      <div className="sidebar">
              <XIcon className='side_twitter'/>
        <SidebarOption active Icon={HomeIcon}  text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore"/>      
        <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon}  text="Messages" />
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>      
              <SidebarOption Icon={ListAltIcon} text="Lists" />
              <SidebarOption Icon={PermIdentityIcon} text="Profile" />
       <SidebarOption Icon={MoreHorizIcon} text="More"/>         
      <Button variant="outlined" className='sidebar_tweet' fullWidth>Tweet</Button>
      
      </div>
    </>
  )
}

export default Sidebar

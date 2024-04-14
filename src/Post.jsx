import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Post = forwardRef(({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar
},ref) => {
  return (
    <>
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_headerText">
            <h3>
              {displayName} <span className='post_headerSpecial'>{verified && <VerifiedIcon className='post_badge' />}@{username}</span>
            </h3>
          </div>
          <div className="post_header_script">
            <p>{text}</p>
            <img src={image} alt='' />
            <div className="post_footer">
              <ChatBubbleOutlineIcon fontSize='small' />
              <RepeatIcon fontSize='small' />
              <FavoriteBorderIcon fontSize='small' />
              <BookmarkBorderIcon fontSize='small' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
});

export default Post

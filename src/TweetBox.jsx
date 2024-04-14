import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@mui/material"
import db from './data';
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = e => {
    e.preventDefault();
    
    db.collection('posts').add({
      displayName: 'Ashish Shiv',
      username: 'ashketchup',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: ""
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <>
      <div className="tweetBox">
              <form >
                  <div className="tweetBox_input">
                      <Avatar src='' />
            <input onChange={(e) => setTweetMessage(e.target.value)}  value={tweetMessage}   placeholder="What's happening" type='text' />
                  </div>
          <input
            value={tweetImage}
            onChange={e => setTweetImage(e.target.value)}
            className='tweetBox_image' placeholder="Optional: Image URL" type='text' />
            <Button onClick={sendTweet} type="submit" className="tweetBox_tweet">Tweet</Button>
        </form>       
      </div>
    </>
  )
}

export default TweetBox

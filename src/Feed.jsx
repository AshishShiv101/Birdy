import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './data'
import FlipMOve from 'react-flip-move'

function Feed() {
  const [posts, setPosts] = useState([]);
   useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
      <>
          <div className="feed">
              <div className="feed_header">
                  <h2>Home</h2>
              </div>
        <TweetBox />
        <FlipMOve>
        {posts.map(post =>(
          <Post
        key={post.text} displayName={post.displayName} 
        username={post.username} 
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
              />))}
              </FlipMOve>
              </div>
    </>
  )
}

export default Feed

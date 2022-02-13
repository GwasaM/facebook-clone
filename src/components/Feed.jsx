import React from 'react';
import "./feed.css";
import StoryReel from "../components/StoryReel";
import MessageSender from "../components/MessageSender";
import Post from "../components/Post"

const Feed = () => {
  return (
    <div className = "feed">
        <StoryReel />
        <MessageSender />

        <Post profilePic = "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             message = "wow this is peter"
             timestamp = "This is the timestamp"
             username = "Peter"
             image = "https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60mage"
        />
        <Post profilePic = "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             message = "wow this is peter"
             timestamp = "This is the timestamp"
             username = "Peter"
             image = "https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60mage"
        />
        <Post profilePic = "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             message = "wow this is peter"
             timestamp = "This is the timestamp"
             username = "Peter"
             image = "https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60mage"
        />
    </div>
    )
};

export default Feed;

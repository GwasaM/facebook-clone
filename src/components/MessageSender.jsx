import React, {useState} from 'react';
import "./messageSender.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();

    };

  return (
  <div className = "messageSender">
      <div className = "messageSender__top">
        <Avatar />
        <form>
            <input 
                value = {input}
                className = "messageSender__input"
                type = "text" 
                placeholder = "Whats's on your Mind?" 
                onChange = {(e) => setInput(e.target.value)}
                />

            <input 
                value = {imageUrl}
                type = "text" 
                placeholder = "image URL(Optional)"
                onChange = {(e) => setImageUrl(e.target.value)} 
                />
            <button onClick = {handleSubmit} type = "submit">
                Hidden Submit
            </button>
        </form>
      </div>

      <div className = "messageSender__bottom">
        <div className = "messageSender__option">
            <VideocamIcon style = {{color: "red"}}/>
            <h3>Live Video</h3>
        </div>
        <div className = "messageSender__option">
            <PhotoLibraryIcon style = {{color: "green"}}/>
            <h3>Photo/Video</h3>
        </div>
        <div className = "messageSender__option">
            <InsertEmoticonIcon style = {{color: "orange"}}/>
            <h3>Feeling/Activity</h3>
        </div>
        
      </div>
  </div>
  )
};

export default MessageSender;

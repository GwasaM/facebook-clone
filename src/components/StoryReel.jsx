import React from 'react';
import "./storyReel.css";
import Story from "../components/Story";

const StoryReel = () => {
  return (
      <div className = "storyReel">
          <Story 
            image = "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
            profileSrc = "https://media.istockphoto.com/photos/singleparent-family-taking-a-selfportrait-picture-id1337376303?b=1&k=20&m=1337376303&s=170667a&w=0&h=CIjpBVjDeF7uTWWSgbaX-yvhdBuh89FTD_zU3Qd5tXI=" 
            title = "Jane" 
            />

<Story 
            image = "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc = "https://images.unsplash.com/photo-1500258593672-b080c40f4b02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            title = "Anne"
            />

<Story 
            image = "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            title = "Yasinta"
            />

<Story 
            image = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            title = "Queen"
            />
      </div>
  )
};

export default StoryReel;

import React, {useState} from 'react';
import "./imageUpload.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { storage, db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import stripAbsolutePath from 'tar/lib/strip-absolute-path';
import { NoEncryption } from '@material-ui/icons';

function getModalStyle(){
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };

}

const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 500,
            height: 343,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid black',
            outline: 'none',
            boxShadow: theme.shadows[5],
            borderRadius: '5px',
        },
    }));



function ImageUpload({username}) {
    const classes = useStyle();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [progress, setProgress] = useState(0);


  return (
    <div className = "imageUpload">
        <Modal 
            open = {open}
            onClose = {handleClose} 
        >

        <div style = {modalStyle} className = {classes.paper}>
            <form className = "imageUpload__commentAssign">
                    <div className = "imageUpload__firstSectionModal">
                        <h3>Create Post</h3>
                    </div>
                    <div className = "imageUpload__sencondSectionModal">
                        <Avatar 
                            className = "imageUpload__avatar"
                            alt = ""
                        />
                        <input type = "text" onChange = {(e) => setCaption(e.target.value)} onClick = {handleOpen} placeholder = {`What's on your Mind ${username}`} 
                        />
                        <hr />
                        <div className = "imageUpload__imageUploadModal" onClick = {uploadFileWithClick}>
                            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGV2oaX1CQV-mXyP_h0KEbKN06cpeUp27Nqg&usqp=CAU" 
                            alt = "" 
                        />
                        <input type = "file" className = "imageFile" onChange = "handleChange" 
                        />
                        <h3>Photo</h3>
                        </div>
                        <div className = "imageUpload__feedModal">
                            <label class = "container">
                                <input type = "checkbox" checked />
                                <span class = "checkmark"></span>
                            </label>
                            <div className = "imageUpload__colorWrap1">
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2r5SN56a6W_ZQD3WO7vrN-LuT8BVkWW1Dug&usqp=CAU" 
                                alt = ""
                                />
                                <Button type = "submit" onClick = {handleUpload} className = "imageUpload__submitButton">Post</Button>
                            </div>
                            <h3>All News Feed</h3>
                            <br />
                            <h2 className = {`imageText ${image && `show`}`}> Image is added and will be displayed after clicking the post button </h2>

                        </div>

                        <br />
                    </div>
            </form>

        </div>
        </Modal>
    </div>
  )
}

export default ImageUpload;
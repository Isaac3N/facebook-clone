import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./StateProvider";
import firebase from 'firebase';
import db from "./firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue() ;
    const[input, setInput]  = useState('');
    const[imageUrl, setImageUrl]  = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // use the current timestamp from the firebase
            profilePic: user.photoURL,
            image: imageUrl,

        })

        //database 
        setInput("");
        setImageUrl("");
    };
    return (
        <div className= "messageSender">
           <div className="messageSender__top" >
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" 
                        type="text" 
                        placeholder={` Whats on your mind, ${user.displayName}?`}/>
                    
                    <input 
                        value={imageUrl}
                        onChange={(e)=> setImageUrl(e.target.value)}
                        placeholder="image URL (optional)" 
                        type="text"/>
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
           <div className="messageSender__bottom" >
                <div className="messageSender_option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3> Photovideo</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3> Feeling/activity </h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

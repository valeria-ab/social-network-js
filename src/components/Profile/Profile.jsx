import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
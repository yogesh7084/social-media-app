import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSIde/PostSide'

const Home = () => {
    return (
        <div className="home">
            {/* <div className="profileSide">Profile</div> */}
            <ProfileSide />
            <PostSide />
            <div className="rightSide">RightSide</div>
        </div>
    )
}

export default Home
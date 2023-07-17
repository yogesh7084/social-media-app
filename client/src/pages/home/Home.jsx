import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'

const Home = () => {
    return (
        <div className="home">
            {/* <div className="profileSide">Profile</div> */}
            <ProfileSide />
            <div className="postSide">Post</div>
            <div className="rightSide">RightSide</div>
        </div>
    )
}

export default Home
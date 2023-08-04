import React from 'react'
import GmailLogo from './sourses/137506918_103309398399926_3028548056447539102_n.jpg'
import './Profile.css'

function ProfileContents() {
    return (
        <div className='profile-mains'>
            <div className='profile-headers'>
                <div className='profile-images'>
                    <img src={GmailLogo}></img>
                </div>
                <div className='profile-right'>
                    <div className='edit-view'>
                        <h5>Logram_User</h5>
                        <button>Edit profile</button>
                        <button>View Archieve</button>
                        <button>Ad tools</button>
                    </div>
                    <div className='followers'>
                        <p>0 Posts</p>
                        <p>0 Followers</p>
                        <p>0 Following</p>
                    </div>
                    <div>
                        <p>🚀 Exploring the World of Technology 🌐
                            📱 Tech Enthusiast | Content Creator 🎥
                            🔬 Stay Updated with Tech News & Reviews 📰
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContents
import React from 'react'
import "./ProfileSuggestion.css"
import GmailLogo from '../src/sourses/137506918_103309398399926_3028548056447539102_n.jpg'
import contents from './Contents'


function ProfileSuggestion() {
  return (
    <div className='profile-main'>
      <div className='my-profile'>
        <img className='profile-img' src={GmailLogo}></img>
        <p>Logram_User</p>
        <button>Logout</button>
      </div>
      <p className='suggest'>Suggestions for you</p>
      <div>
        {
          contents.map((contents) => {
            return (
              <div className='suggestions-list'>
                <div className='other-profile'>
                  <img className='profile-img' src={contents.profilepicture}></img>
                  <p>{contents.username}</p>
                  <button>Follow</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default ProfileSuggestion;


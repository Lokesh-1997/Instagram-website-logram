import React from 'react'
import './Stories.css'
import contents from './Contents'


function Stories() {
    return (
        <div className='story-main'>
            {
                contents.map((contents) => {
                    return (
                        <span className='story-profile' >
                            <img className='profile-img' src={contents.displayPicture}></img>
                            <p>{contents.username}</p>
                        </span >
                    )
                })
            }
        </div>
    )
}

export default Stories;
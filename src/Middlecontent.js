import React from 'react'
import contents from './Contents'
import './Middlecontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGrinHearts, faHeart, faHeartCirclePlus, faHeartCrack, faShare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Middlecontent() {

    const [like, setLike] = useState(0)

    return (
        <>
            {contents.map((contents) => {
                return <div className='middle-content'>
                    <div className='header'>
                        <img className='pp' src={contents.profilepicture} />
                        <p>{contents.username}</p>
                    </div>
                    <img className='dp' src={contents.displayPicture} />
                    <div className='heart-share'>
                        <FontAwesomeIcon onClick={() => setLike(like + 1)} className='icon-pen' icon={faHeart} />
                        <FontAwesomeIcon className='icon-pen' icon={faComment} />
                        <FontAwesomeIcon className='icon-pen' icon={faShare} />
                    </div>
                    <p className='likes'>{like} Likes</p>
                    <div className='footer'>
                        <h6 className='username'>{contents.username}</h6>
                        <p>{contents.caption}</p>
                    </div>
                </div>
            })}
        </>
    )
}

export default Middlecontent
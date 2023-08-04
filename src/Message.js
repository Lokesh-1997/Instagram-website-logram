import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

function Message(props) {



    const CloseMessage = () => {
        props.setMessage(false)
    }


    return (
        <div className='search-main'>
            <h2>Logram_User</h2>
            <FontAwesomeIcon onClick={CloseMessage} className='icon' icon={faClose} />
            <div className='search-box'>
                <FontAwesomeIcon className='icons' icon={faSearch} />
                <input type='text' placeholder='Search' ></input>
            </div>
            <h6>Resent Messages</h6>
        </div>
    )
}

export default Message




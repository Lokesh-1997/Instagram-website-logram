import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';

function Notifications(props) {

    const CloseNotify = () => {
        props.setNotification(false)
    }

    return (
        <div className='search-main'>
            <h2>Logram_User</h2>
            <FontAwesomeIcon onClick={CloseNotify} className='icon' icon={faClose} />
            <div className='search-box'>
            </div>
            <h6>No Notifications</h6>
        </div>
    )
}

export default Notifications



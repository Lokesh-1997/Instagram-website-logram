import React from 'react'
import { useState } from 'react';
import './LeftNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHome, faMessage, faPerson, faSearch, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import Search from './Search';
import Message from './Message';
import Notifications from './Notifications';

function LeftNavBar() {

    const [search, setSearch] = useState(false)
    const [message, setMessage] = useState(false)
    const [notification, setNotification] = useState(false)
    const ShowMessage = () => {
        setMessage(true)
    }
    const ShowSearch = () => {
        setSearch(true)
    }
    const ShowNotify = () => {
        setNotification(true)
    }
    return (

        <div className='left-main'>
            <h1>Logram</h1>
            <div className='a-tags'>
                <Link className='buttons' to='/home'><FontAwesomeIcon className='icons' icon={faHome} />Home</Link>
                <Link onClick={ShowSearch} className='buttons' to=''><FontAwesomeIcon className='icons' icon={faSearch} />Search</Link>
                <Link className='buttons' to='/explore'> <FontAwesomeIcon className='icons' icon={faCompass} />Explore</Link>
                <Link onClick={ShowMessage} className='buttons' to=''> <FontAwesomeIcon className='icons' icon={faMessage} />Messages</Link>
                <Link onClick={ShowNotify} className='buttons' to=''>  <FontAwesomeIcon className='icons' icon={faHeart} />Notifications</Link>
                <Link className='buttons' to='/create'><FontAwesomeIcon className='icons' icon={faPlusSquare} />Create</Link>
                <Link className='buttons' to='/profile'><FontAwesomeIcon className='icons' icon={faPerson} />Profile</Link>
                <Outlet />
            </div>
            {search && < Search setSearch={setSearch} />}
            {message && <Message setMessage={setMessage} />}
            {notification && <Notifications setNotification={setNotification} />}
        </div>

    )
}
export default LeftNavBar
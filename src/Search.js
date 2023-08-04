import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'



function Search(props) {

    const CloseSearch = () => {
        props.setSearch(false)
    }
    return (
        <div className='search-main'>
            <h2>Search</h2>
            <FontAwesomeIcon onClick={CloseSearch} className='icon' icon={faClose} />
            <div className='search-box'>
                <FontAwesomeIcon className='icons' icon={faSearch} />
                <input type='text' placeholder='Search' ></input>
            </div>
            <h6>Resent searches</h6>
        </div>
    )
}

export default Search



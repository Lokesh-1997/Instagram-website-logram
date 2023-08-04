import React from 'react'
import LeftNavBar from './LeftNavBar'
import FeedContents from './FeedContents'
import ProfileSuggestion from './ProfileSuggestion'
import './Instagram.css'

function Instagram() {
    return (
        <div className='main-page'>
            <LeftNavBar />
            <FeedContents />
            <ProfileSuggestion />
        </div>
    )
}

export default Instagram;
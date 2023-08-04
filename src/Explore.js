import React from 'react'
import LeftNavBar from './LeftNavBar'
import contents from './Contents'
import './Explore.css'

function Explore() {
    return (
        <div>
            <LeftNavBar />
            <ExploreContent />
        </div>
    )
}

function ExploreContent() {
    return (
        <div className='explore-contents'>
            <div className='explore-images'>
                {
                    contents.map((a) => {
                        return (
                            <img src={a.displayPicture}></img>
                        )
                    })

                }
            </div>

        </div>
    )
}

export default Explore
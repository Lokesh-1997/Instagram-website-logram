import React from 'react'
import './FeedContents.css'
import Stories from './Stories'
import Middlecontent from './Middlecontent'




function FeedContents() {
      return (
            <div className='main-feed'>
                  <Stories />
                  <Middlecontent />
            </div>
      )
}

export default FeedContents

{/* <h5>{contents.map((e) => {
                              return e.username
                        })}</h5> */}
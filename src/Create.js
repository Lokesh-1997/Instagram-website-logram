import React from 'react'
import './Create.css'
import LeftNavBar from './LeftNavBar'
import ProfileSuggestion from './ProfileSuggestion'
import Stories from './Stories'

function Create() {
    return (
        <>
            <LeftNavBar />
            <div className='create-content'>
                <div className='create-input'>
                    <div >
                        <label>User Name:</label>
                        <input type='text' name='product' placeholder='Create User Name' ></input>
                    </div>

                    <div>
                        <label>Drop a image:</label>
                        <input className='Description' type='file' name='description' placeholder='Enter Product Description' ></input>

                    </div>
                    <div>
                        <label>Caption</label>
                        <input type='text' placeholder='Write a caption' />
                    </div>
                </div>
            </div>
            <ProfileSuggestion />
        </>
    )
}

export default Create
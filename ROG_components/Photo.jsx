import React from 'react'
import { Link } from 'react-router-dom'
import './photo.css'

function Photo() {
  return (  
    <>
    <div className='ser'>
    <div>PORTFOLIO OF PHOTOS AND VIDEOS</div>
    </div>
    <p>these are the photo samples based ont their needs, took by out team </p>
    <p>these are the video samples based ont their needs, took by out team </p>
    <Link as={Link} to={'/'}>Photography</Link>
   
    </>
  )
}

export default Photo
import React from 'react'
import userImg from '../../assets/user.png';
import './Avatar.scss'

function Avatar({src}) {
  return (
    <div className='avatar'>
    <img src={ src? src: userImg}  alt="userImg" />
    </div>
  )
}

export default Avatar
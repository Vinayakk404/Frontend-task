import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import mainLogo from '../../assets/download.jpg'
const Card = ({id, title, tag, status}) => {
  return (
   <>
   
   <div className='card '> 
   <div class="heading">
    <div class="cam">{id}</div>
    <div class="logo">

      <img src={mainLogo} className='image-container'/>
    </div>
   </div>

   <div class="task">{title}</div>
<div class="bottom-row">
  <div className='dot'>
  <FontAwesomeIcon icon={faEllipsis} style={{color: "#9e9e9e",}} />
  </div>
  {
    tag &&
   <div class="tag">
    <ul>
    <li>{tag}</li>
    </ul>
    </div>
}
    </div>
   </div>
   </>
  )
}

export default Card
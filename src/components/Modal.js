import React from 'react';
import './modal.css';

const Modal = (props) => {
  
const trailer_url = `https://www.youtube.com/embed/${props.trailerId}`
console.log(trailer_url)

  return (
    <div className={props.activeModal ? "modal active" : "modal"}>
      <iframe
        className="modal_iframe"
        title="Movie Trailer"
        src={props.activeModal ? trailer_url : ""}
      ></iframe>
    </div>
  )
}

export default Modal
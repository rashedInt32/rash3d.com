import React from 'react';

// should takes all the project data
const Modal = ({data, isShow, onCloseModal}) => {
  const { url, name, description, screenshots = [], tech=[] } = data;

  return (
    <div className={isShow ? 'modal show' : 'modal'}>
      <div className="modal-body">
        <span onClick={onCloseModal}>Close</span>
        <div className="modal-content">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="screenshots">

              </div>
            </div>
            <div className="col-md-6">
              <a href={url}>Url</a>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>Tech Use: {tech.map(item => <span key={item}>{item}</span>)} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

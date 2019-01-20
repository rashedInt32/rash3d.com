import React from 'react';

// should takes all the project data
const Modal = ({data, isShow}) => {
  const { url, name, description, screenshots, tech } = data;
  return (
    <div className={isShow ? 'modal show' : 'modal'}>
      <div className="modal-body">
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
              <p>Tech Use: {tech.map(item => <span>{item}</span>)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

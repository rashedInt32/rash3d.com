import React from 'react';
import MaterialIcon from 'material-icons-react';
import SliderComponent from './Slider';



// should takes all the project data
const Modal = ({ data, isShow, onCloseModal }) => {
  const { url, name, description, screenshots = [], tech = [] } = data;


  return <div className={isShow ? "modal show" : "modal"}>
    <div className="modal-body">
      <MaterialIcon icon="close" onClick={onCloseModal} className="material-icons modal-close" />
      <div className="modal-content">
        <SliderComponent images={screenshots} />

        <div className="details">
          <a className="project-link" href={url}>
            <MaterialIcon icon="link" />
          </a>
          <h4 className="project-title">{name}</h4>
          <p className="row col-md-9">{description}</p>
          <p className="tech-use">
            Tech Use: {tech.map(item => (
              <span key={item}>{item}</span>
            ))}{" "}
          </p>
        </div>

      </div>
    </div>
    </div>;
}

export default Modal;

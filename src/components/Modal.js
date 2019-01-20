import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import Slider from "react-slick";


// should takes all the project data
const Modal = ({ data, isShow, onCloseModal }) => {
  const { url, name, description, screenshots = [], tech = [] } = data;
  const sliderSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return <div className={isShow ? "modal show" : "modal"}>
      <div className="modal-body">
        <MaterialIcon icon="close" onClick={onCloseModal} className="material-icons modal-close" />
        <div className="modal-content">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="screenshots">
                <Slider {...sliderSettings}>
                  {screenshots.map((item, index) => (
                    <div key={index} className="items">
                      <img src={item} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-12">
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
        </div>
      </div>
    </div>;
}

export default Modal;

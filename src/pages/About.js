import React from "react";
import Layout from '../layout/Layout';
import avatar from '../assets/img/avatar.jpg';

const About = () => {
  return (
    <Layout>
      <div className="container about">
        <div className="row">
          <div className="col-md-4 offset-md-1 order-md-last">
            <div className="image-content">
              <img src={avatar} alt="Avatar"/>
            </div>
          </div>
          <div className="col-md-7">
            <h5>About </h5>
            <p>Some content</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

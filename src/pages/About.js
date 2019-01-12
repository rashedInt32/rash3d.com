import React from "react";
import Layout from '../layout/Layout';

const About = ({location}) => {
  return <Layout>
      <div className="banner">
      <h1>About {location.pathname}</h1>
      </div>
    </Layout>;
};

export default About;

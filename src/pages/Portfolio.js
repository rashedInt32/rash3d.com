import React from 'react';
import Layout from '../layout/Layout';

const Portfolio = ({ projects = [] }) => {
  // Add transition delay to the project card
  const delay = (duration, index) => duration * index + 's';

  return <Layout>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            const style = { animationDelay: delay(0.3, index) };
            return <div className="col-md-3 col-sm-6 translateanim" style={style} key={project.id}>
                <h5>{project.name}</h5>
              </div>;
          })}
        </div>
      </div>
    </Layout>;
}

export default Portfolio;

import React from 'react';
import Layout from '../layout/Layout';
import Card from '../layout/Card';
import Modal from '../components/Modal';

const Portfolio = ({ projects = [] }) => {
  // Add transition delay to the project card
  const delay = (duration, index) => duration * index + 's';

  // Grid wrapper classes
  const classes = "col-md-3 col-sm-6 translateanim";

  const handleDetails = project =>
    <Modal data={project} isShow={true} />

  return <Layout>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            const style = { animationDelay: delay(0.3, index) };
            return <div
              className={classes}
              style={style}
              key={project.id}>
              <Card name={project.name} onClickCard={() => handleDetails(project)} />
            </div>
          })}
        </div>
      </div>
    </Layout>;
}

export default Portfolio;

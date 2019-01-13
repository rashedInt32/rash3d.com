import React from 'react';

import Layout from '../layout/Layout';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

const Portfolio = ({ projects = [] }) => {

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            const delay = .3 * index;
            const style = {
              animationDelay: delay + 's',
            };
            return (
              <div className="col-md-3 col-sm-6 translateanim" style={style} key={project.id}>
                <h5>{project.name}</h5>
              </div>
            )
          })}
        </div>

      </div>
    </Layout>
  );
}

export default Portfolio;

import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Card from '../layout/Card';
import Modal from '../components/Modal';

class Portfolio extends Component {
  state = {
    data: {},
    showModal: false,
  }

  // Add transition delay to the project card
  delay = (duration, index) =>
    duration * index + 's';

  // This will open modal component with details
  handleDetails = data =>
    this.setState({ data, showModal: true });

  // Close modal
  closeModal = () =>
    this.setState({ showModal: false });

  render() {
    const { projects } = this.props;
    const { data, showModal } = this.state;
    const classes = "col-md-3 col-sm-6 translateanim";

    return <Layout>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            const style = { animationDelay: this.delay(0.3, index) };
            return <div
              className={classes}
              style={style}
              key={project.id}>
              <Card
                name={project.name}
                bg={project.bg}
                onClickCard={() => this.handleDetails(project)}
              />
            </div>
          })}
        </div>

        <Modal
          data={data}
          isShow={showModal}
          onCloseModal={this.closeModal}
        />
      </div>
    </Layout>;
  }
}

export default Portfolio;

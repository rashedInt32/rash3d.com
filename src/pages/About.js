import React from "react";
import Layout from '../layout/Layout';
import avatar from '../assets/img/avatar.jpg';

const About = () => {
  return <Layout>
      <div className="container about">
        <div className="row">
          <div className="col-md-4 offset-md-1 order-md-last">
            <div className="image-content">
              <img src={avatar} alt="Avatar" />
            </div>
          </div>
          <div className="col-md-7">
            <h3 className="pb-30">About </h3>
            <p>
              I am, in a nutshell, a big geek who works in web development for
              more than 3+ Years and now. Basically i love to work with
              complex ideas and turn them into nice working applications. Passionate about learing.
            </p>
            <p>
              In my academic years, I have spent most of the time, learning
              the things that i'm good at now. I'm really enjoying the working
              with UI/UX and javascripts.
            </p>

            <p>
              I am mainly fully focused on frontend related task. I generally
              prefer React.js/ Vuejs/ jQuery for the frontend purpose along
              with html/css.
            </p>

            <p>I am fully experienced in the following areas.</p>

            <span>
              - Javascript, React.js, Vuejs, Angular, jQuery, Ionic Cordova;
            </span>
            <span>- SCSS/CSS;</span>
            <span>- HTML(5), Twitter Bootstrap, Handlebars;</span>
            <span>- Bower, npm, webpack, Gulp;</span>
            <span>- Familiar with: NodeJs/Express, Laravel, WordPress, Django Backend frameworks;</span>

            <p className="pt-20">
              So i have been working as a Frontend web developer and have been
              loving every minute of it.I hope i can bring something cool,
              fresh and new into your project.
            </p>

            <p>
              I like new challenges and will like to be a top professional in
              the near future. :)
            </p>
          </div>
        </div>
      </div>
    </Layout>;
};

export default About;

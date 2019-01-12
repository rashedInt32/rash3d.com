import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/Banner';

const Home = () => {
  const name = 'Rashed';
  const introText = "I'm a frontend developer.I make things.";

  return (
    <Layout>
      <Banner name={name} introText={introText}/>;
    </Layout>
  )
}

export default Home;

import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  const name = 'Rashed';
  const introText = "I'm a frontend developer.I make things.";

  return (
    <div className="react-transition swipe-right">
      <Banner name={name} introText={introText} />;
    </div>
  )
}

export default Home;

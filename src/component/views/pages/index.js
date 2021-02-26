import React from 'react';
import Header from '../../layouts/header/Header';
import ShowcaseWrapper from '../../layouts/showcase/ShowcaseWrapper';
import NewArrival from '../../layouts/components/NewArrival';

const Home = () => {
  return (
    <div>
      <Header />
      <ShowcaseWrapper />
      <NewArrival />
    </div>
  );
};

export default Home;

import React from 'react';
import Nav from '../components/Navbar';
import Boxtip from '../components/Boxtip';

const Home = () => {
  return (
    <section className={"burguer"}>
      <div className={"overlay"}>
        <Nav />
        <Boxtip footerText="ABRIR ORDEN" />
      </div>
    </section>
  );
};

export default Home;

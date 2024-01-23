
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

const Index = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Highlights from '../components/Highlights';
import Categories from '../components/Categories';

const Index = () => {

  return (
    <>
      <Head>
        <title>Aloha | Home</title>
      </Head>
      <Header />
      <Highlights />
      <Categories />
      <Footer />
    </>
  );
};

export default Index;

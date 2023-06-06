import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Categories from '../../components/Categories';
import { getActivities } from '../../api/highlight';

const HighlightDetail = () => {
  const [highlightType, setHighlightType] = useState('Highlight Detail');
  const [activitiesInfo, setActivitiesInfo] = useState({
    name: '',
    image: '',
    description: '',
    activities: [],
  });

  useEffect(() => {
    if (window.location.search) {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('name')) {
        setHighlightType(urlParams.get('name'));
        fetchActivities(urlParams.get('name'));
      }
    }
  }, []);

  const fetchActivities = (type) => {
    getActivities(type).then(response => {
      if (response) {
        const {data = {}} = response;
        setActivitiesInfo(data);
      }
    });
  }

  return (
    <>
      <Head>
        <title>Aloha | Highlight Detail</title>
      </Head>
      <Header />
      <div className="container main-container mx-auto mt-8 mb-8">
        <div className="md:flex">
          <div className="md:w-1/4 w-full">
            <Image
              src={activitiesInfo.image}
              width={420}
              height={420}
            />
          </div>
          <div className="md:w-3/4 md:pl-6 md-pt-0 w-full pt-4">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#008080' }}>{activitiesInfo.name}</h2>
            <p className="text-base font-normal mb-3 overflow-x-auto" style={{ color: '#001A1A' }}>{activitiesInfo.description}</p>
            <span>Activities: </span>
            <select className="dropdown-style">
              {activitiesInfo.activities && activitiesInfo.activities.length > 0 ? 
                activitiesInfo.activities.map((item, index) => <option key={index}>{item.name}</option>)
              : null}
            </select>
          </div>
        </div>
      </div>
      <Categories />
      <Footer />
    </>
  );
};

export default HighlightDetail;

import React, { useEffect, useState } from 'react';
import HighlightsItems from '../HighlightItems';
import { getHighlights } from '../../api/highlight';

const Highlights = () => {
  const [highlightInfo, setHighlightInfo] = useState<any>([]);
  useEffect(() => {
    fetchHighlights();
  }, [])

  const fetchHighlights = () => {
    getHighlights().then(response => {
      if (response) {
        const {data = {}} = response;
        setHighlightInfo(data);
      }
    });
  }

  return (
    <div className="container main-container mx-auto">
      <div className="py-5 pb-12">
        <h1 className="text-lg leading-5 font-bold mb-5" style={{ color: '#001A1A' }}>Highlights</h1>
        <HighlightsItems list={highlightInfo} />
      </div>
    </div>
  );
};

export default Highlights;

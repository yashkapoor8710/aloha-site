import React, { useEffect, useState } from 'react';
import CategoriesList from '../CategoriesList';
import TravelGuide from '../TravelGuide';
import { getCategories } from '../../api/highlight';

const Categories = () => {
  const [categoriesInfo, setCategoriesInfo] = useState<any>([]);
  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = () => {
    getCategories().then(response => {
      if (response) {
        const {data = {}} = response;
        setCategoriesInfo(data);
      }
    });
  }

  return (
    <div className="categories-section">
      <div className="container main-container mx-auto">
        <div className="md:flex py-8 pb-12">
          <CategoriesList list={categoriesInfo} />
          <TravelGuide />
        </div>
      </div>
    </div>
  );
};

export default Categories;

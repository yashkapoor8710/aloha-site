import React from 'react';
import Image from 'next/image';

const CategoriesList = ({ list }) => {

  return (
    <div className="md:w-1/2 md:pr-4 w-full">
      <h1 className="text-lg leading-5 font-bold mb-5" style={{ color: '#001A1A' }}>Categories</h1>
      {list && list.length > 0 ? list.map((item, index) => <div key={index} className="categories-item mb-3">
        <div className="flex items-center justify-between py-6 px-5">
          <p className="text-base font-normal mb-0" style={{ color: '#001A1A' }}>{item.name}</p>
          <div className="flex justify-end">
            <div className="flex cursor-pointer">
              <Image
                src="/arrow.svg"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>) : null}
    </div>
  );
};

export default CategoriesList;

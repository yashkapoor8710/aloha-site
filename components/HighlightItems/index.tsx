import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HighlightsItems = ({ list }) => {

  return (
    <div className="flex highlight-list">
      {list && list.length > 0 ? list.map((item, index) => <div key={index} className="highlight-item mr-4">
        <Image
          src={item.image}
          width={370}
          height={170}
        />
        <div className="highlight-content p-5">
          <h2 className="text-xl font-bold mb-3" style={{ color: '#008080' }}>{item.title}</h2>
          <p className="text-base font-normal mb-3 overflow-x-auto" style={{ color: '#001A1A' }}>{item.description}</p>
          <div className="flex justify-end">
            <Link href={`/highlight-detail?name=${item.title}`}>
              <div className="flex cursor-pointer">
                <Image
                  src="/link.svg"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>) : null}
    </div>
  );
};

export default HighlightsItems;

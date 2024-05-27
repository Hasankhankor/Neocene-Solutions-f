'use client';

import React, { useState } from 'react';

const App = () => {
  const [textContentHover, setTextContentHover] = useState(false);
  const [imageContentHover, setImageContentHover] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-10 mx-auto">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto my-5 shadow-lg overflow-hidden">
        <div
          className={`flex-1 p-5 text-center transition-transform duration-300 ease-in-out cursor-pointer ${textContentHover ? 'translate-x-2' : ''}`}
          onMouseEnter={() => setTextContentHover(true)}
          onMouseLeave={() => setTextContentHover(false)}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">Drilling Management</h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight font-sans">
            Our Drilling Management and Core Logging services cover all aspects of drill program oversight, from pinpointing drill targets to managing contractors and ensuring precise core handling and logging. With great attention to detail, we coordinate every step of the drilling process, guaranteeing efficiency and accuracy from start to finish. Our expertise extends to core logging and sampling, cutting, and assay database management, providing clients with valuable insights for successful mineral exploration and mining endeavors.
          </p>
        </div>
        <div
          className={`flex-1 flex items-center justify-center transition-transform duration-300 ease-in-out ${imageContentHover ? '-translate-y-2' : ''}`}
          onMouseEnter={() => setImageContentHover(true)}
          onMouseLeave={() => setImageContentHover(false)}
        >
          <img
            src="https://ik.imagekit.io/os33grffu/Tab%202.png?updatedAt=1712504481176"
            alt="Description of image"
            className={`max-w-4/5 h-auto transition-transform duration-300 ease-in-out ${imageHover ? 'scale-105' : ''}`}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

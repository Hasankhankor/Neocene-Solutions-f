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
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">Database and Mapping Revival Solutions</h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight font-sans">
            Our database management service not only organizes exploration databases efficiently but also revitalizes old maps, seamlessly integrating them with GIS-supported layers. Utilizing state-of-the-art software packages, we meticulously scan and digitize old maps, georeferencing them, and store them in a format conducive to modern queries and machine learning methodologies. Our expertise ensures that data is stored in a manner that facilitates easy retrieval, empowering clients with quick access to valuable insights for informed decision-making in mineral exploration and mining projects.
          </p>
        </div>
        <div
          className={`flex-1 flex items-center justify-center transition-transform duration-300 ease-in-out ${imageContentHover ? '-translate-y-2' : ''}`}
          onMouseEnter={() => setImageContentHover(true)}
          onMouseLeave={() => setImageContentHover(false)}
        >
          <img
            src="https://ik.imagekit.io/os33grffu/Tab%203.png?updatedAt=1712504594108"
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

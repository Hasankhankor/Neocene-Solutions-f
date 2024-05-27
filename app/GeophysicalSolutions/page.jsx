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
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">Integrated Geophysical Solutions</h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight font-sans">
            Our Geophysical Survey Design and Interpretation service offers tailored solutions for diverse deposit types, ensuring optimal outcomes in mineral exploration and mining. We specialize in recommending and designing a comprehensive range of geophysical surveys, effectively aligned with project objectives. With adept communication and oversight of geophysical contractors, we ensure that surveys yield more than just maps—that deliver actionable insights. Moreover, our proficiency extends to integrating geophysical data with diverse datasets, enabling the identification, extension, and delineation of geological targets of interest. Through this integrated approach, we empower clients with a holistic understanding of their exploration targets, enhancing decision-making and project success.
          </p>
        </div>
        <div
          className={`flex-1 flex items-center justify-center transition-transform duration-300 ease-in-out ${imageContentHover ? '-translate-y-2' : ''}`}
          onMouseEnter={() => setImageContentHover(true)}
          onMouseLeave={() => setImageContentHover(false)}
        >
          <img
            src="https://ik.imagekit.io/os33grffu/Tab%204.png?updatedAt=1712504769285"
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

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
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">Capacity Building</h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight font-sans">
            We offer comprehensive workforce training tailored to elevate proficiency in modern mineral exploration techniques and project management skills. Our programs are designed to empower teams with the latest industry knowledge and practical skills. Additionally, we provide customized training in a variety of geoscience-related software, including ArcGIS Pro, LeapFrog, DHlogger, MX Deposit, and others. Through our expert-led sessions, participants gain hands-on experience and invaluable insights to optimize their performance and drive success in mineral exploration projects.
          </p>
        </div>
        <div
          className={`flex-1 flex items-center justify-center transition-transform duration-300 ease-in-out ${imageContentHover ? '-translate-y-2' : ''}`}
          onMouseEnter={() => setImageContentHover(true)}
          onMouseLeave={() => setImageContentHover(false)}
        >
          <img
            src="https://ik.imagekit.io/os33grffu/Homepage%202.png?updatedAt=1712504269673"
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

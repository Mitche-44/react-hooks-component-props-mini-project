
import React from 'react';

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside className="bg-gray-100 p-4 rounded shadow">
      <img
        src={image}
        alt="blog logo"
        className="mb-4 w-[215px] h-auto object-cover"
      />
      <p className="text-gray-700">{about}</p>
    </aside>
  );
}

export default About;

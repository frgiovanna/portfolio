import React, { useState } from 'react';

export const Carousel = () => {
  const [item, setItem] = useState(0);

  const itemsNumber = 2;

  const projects = ['breno1', 'breno2', 'breno3', 'breno4', 'breno5', 'breno6'];

  const itemsLength = Math.ceil(projects.length / itemsNumber);

  const handleNext = () => {
    setItem((current) => (current + 1) % itemsLength);
  };

  const handlePrevious = () => {
    setItem((current) => current - 1);
  };

  return (
    <div>
      <button disabled={item === 0} onClick={handlePrevious}>
        previous
      </button>
      <p>{projects[item]}</p>
      <button disabled={item === itemsLength - 1} onClick={handleNext}>
        next
      </button>

      {Array.from({ length: itemsLength }).map((_, index) => (
        <span
          onClick={() => setItem(index)}
          key={index}
          style={{ backgroundColor: item === index ? 'red' : 'blue', height: '10px', width: '10px' }}
        >
          x
        </span>
      ))}
    </div>
  );
};

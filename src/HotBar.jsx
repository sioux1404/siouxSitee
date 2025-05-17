import React, { useState } from 'react';
import ItemOne from './assets/foodOne.webp';
import './HotBar.css';

function HotBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleParagraph = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='mainContent'>
      <div className='topRow'>
        <img src={ItemOne} alt='ItemOne' />
        <button onClick={toggleParagraph}>
          {isOpen ? 'Hide' : 'Show'} Paragraph
        </button>
      </div>
      {isOpen && (
        <p className='toggleText'>
          This is the paragraph content. Click the button again to hide it.
        </p>
      )}
    </div>
  );
}

export default HotBar;

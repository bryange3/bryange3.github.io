// Code below derived from: https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc

import React, { useState } from 'react';

import backtotop from '../assets/other/backtotop.png';

const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <img
      src={backtotop}
      alt="Scroll to Top Button"
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
}

export default ScrollArrow;
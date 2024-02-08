import { useScroll, useMotionValueEvent } from 'framer-motion';
import React, { useRef } from 'react';

const Section = ({ id, theme, setTheme, children }) => {

  let container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme);
    }
  });

  return (
    <section id={id} className="bg-white dark:bg-black px-8 py-24 min-h-screen flex flex-col justify-center relative" ref={container}>
      {children}
    </section>
  );

};

export default Section;

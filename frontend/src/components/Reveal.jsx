import React, { useEffect, useRef } from "react";

const Reveal = ({ as: Component = "div", className = "", delay = 0, children, ...rest }) => {
  const ref = useRef(null);
  const { style = {}, ...restProps } = rest;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Reveal;

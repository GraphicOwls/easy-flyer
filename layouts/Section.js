import React from 'react';

export default function Section({ children, classes, bgColor }) {
  return (
    <section className={`${classes} ${bgColor} relative`}>{children}</section>
  );
}

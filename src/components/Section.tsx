import React, { ReactNode } from "react";

interface SProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Section = React.forwardRef<HTMLElement, SProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      className={`w-full relative py-20 ${props.className}`}
    >
      {props.children}
    </section>
  );
});

export default Section;

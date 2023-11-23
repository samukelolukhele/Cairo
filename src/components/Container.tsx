import { ReactNode, forwardRef } from "react";

type CProps = {
  children: ReactNode;
  flexType?: "between" | "center" | null;
  className?: string;
};

const Container = forwardRef<HTMLDivElement, CProps>(
  ({ children, flexType = null, className }, ref) => {
    const flexTypes = {
      center: "items-center justify-center",
      between: "items-center justify-between",
    };

    return (
      <div
        ref={ref}
        className={`relative mx-8 lg:mx-auto lg:container flex ${
          flexType == "center"
            ? flexTypes.center
            : flexType == "between"
            ? flexTypes.between
            : ""
        } ${className}`}
      >
        {children}
      </div>
    );
  }
);

export default Container;

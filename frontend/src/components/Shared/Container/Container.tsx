import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;

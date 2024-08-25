import React, { PropsWithChildren } from "react";
// Add typing for React Component:
// with children prop
type ComponentWithChildrenProps = PropsWithChildren<{
  title: { value: string };
}>;

// Optimized component using React.memo
const ComponentWithChildren: React.FC<ComponentWithChildrenProps> = React.memo(
  ({ title, children }) => {
    return (
      <div>
        <h2>{title.value}</h2>
        {children}
      </div>
    );
  }
);

export default ComponentWithChildren;

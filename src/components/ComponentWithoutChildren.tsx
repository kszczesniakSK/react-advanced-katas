import React from "react";

// Add typing for React Component:
// without children prop
type ComponentWithoutChildrenProps = {
  title: { value: string };
};

// Optimized component using React.memo
const ComponentWithoutChildren: React.FC<ComponentWithoutChildrenProps> =
  React.memo(({ title }) => {
    return <h2>{title.value}</h2>;
  });

export default ComponentWithoutChildren;

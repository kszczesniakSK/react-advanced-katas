import React from "react";

// Use react.memo in your app in a way that improves the performance.

type ComponentWithoutChildrenProps = {
  title: { value: string };
};

// Optimized component using React.memo
const ComponentWithoutChildrenMemo: React.FC<ComponentWithoutChildrenProps> =
  React.memo(
    ({ title }) => {
      return <h2>{title.value}</h2>;
    },
    (prevProps, nextProps) => {
      return prevProps.title.value === nextProps.title.value;
    }
  );

export default ComponentWithoutChildrenMemo;

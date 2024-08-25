import { ReactNode, useEffect, useState } from "react";

const MouseTracker: React.FC<{
  render: (mouse: { x: number; y: number }) => ReactNode;
}> = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <>{render(mousePosition)}</>;
};

export default MouseTracker;

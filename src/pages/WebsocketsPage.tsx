import React from "react";
import SocketTest from "../components/SocketTest";
// Implement real time data feature with socket.io (or implement GraphQL subscription from katas in the following section)

const WebsocketsPage: React.FC = () => {
  return (
    <div>
      <SocketTest />
    </div>
  );
};

export default WebsocketsPage;

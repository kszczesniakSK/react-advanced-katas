import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Post {
  id: number;
  title: string;
  content: string;
}

const SocketTest: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReconnecting, setIsReconnecting] = useState<boolean>(false);

  useEffect(() => {
    const socket: Socket = io('http://localhost:3000', {
      reconnection: true, // Enable reconnection
      reconnectionAttempts: 5, // Try 5 times before giving up
      reconnectionDelay: 1000, // Wait 1 second before retrying
    });

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      setError(null); 
      setIsReconnecting(false); 
    });

    socket.on('postUpdate', (data: Post) => {
      setPost(data);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
      setError('Disconnected from Socket.IO server');
      setIsReconnecting(false);
    });

    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
      setError('Connection error: Could not connect to server');
      setIsReconnecting(false);
    });

    socket.io.on('reconnect_attempt', (attemptNumber) => {
      console.log(`Reconnect attempt ${attemptNumber}`);
      setError(`Reconnecting... Attempt ${attemptNumber}`);
      setIsReconnecting(true); 
    });

    socket.io.on('reconnect', (attemptNumber) => {
      console.log(`Reconnected after ${attemptNumber} attempts`);
      setError(null); 
      setIsReconnecting(false); 
    });

    socket.io.on('reconnect_failed', () => {
      console.error('Reconnection failed');
      setError('Reconnection failed. Please check your connection.');
      setIsReconnecting(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Post Updates (Socket.IO)</h2>

      {error && !isReconnecting ? (
        <div style={{ color: 'red' }}>
          <strong>Error: </strong>{error}
        </div>
      ) : null}

      {isReconnecting ? (
        <div style={{ color: 'orange' }}>
          <strong>Reconnecting...</strong> Please wait.
        </div>
      ) : null}

      {/* Conditionally display post data */}
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>No post data yet...</p>
      )}
    </div>
  );
};

export default SocketTest;
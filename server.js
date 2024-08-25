import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

// Implement real time data feature with socket.io (or implement GraphQL subscription from katas in the following section)
const io = new Server(3000, {
  cors: {
    origin: "*", // Allow CORS for all origins
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  // Send post updates to the client every 5 seconds
  setInterval(() => {
    socket.emit("postUpdate", {
      id: 1,
      title: "Updated Post",
      content: `This is the updated content from Socket.IO. ${uuidv4()}`,
    });
  }, 5000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

console.log("Socket.IO server running on http://localhost:3000");

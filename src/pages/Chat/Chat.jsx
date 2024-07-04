// import "./Chat.scss";
// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");

// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [messageText, setMessageText] = useState("");

//   const sendMessage = () => {
//     socket.emit("message", messageText);
//     setMessageText("");
//   };

//   // Receive messages
//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages((messages) => [...messages, message]);
//     });
//   }, []);

//   return (
//     <div className="chat-room">// The chat room components will go here</div>
//   );
// }

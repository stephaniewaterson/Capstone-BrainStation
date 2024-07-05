import "./Chat.scss";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatMessage from "../../components/ChatMessage/ChatMessage";

const socket = io.connect("http://localhost:3001");

export default function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setSHowChat] = useState(false);

  const joinRoom = () => {
    if (!username || !room) {
      return;
    } else socket.emit("join_room", room);
    setSHowChat(true);
  };

  return (
    <>
      <section className="chat">
        {!showChat ? (
          <div className="chat__container">
            <h3 className="chat__title">Join a chat</h3>
            <input
              type="text"
              placeholder="Name..."
              className="chat__input"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              className="chat__input"
              onChange={(event) => setRoom(event.target.value)}
            />
            <button onClick={joinRoom} className="chat__button">
              Join a Room
            </button>
          </div>
        ) : (
          <ChatMessage socket={socket} username={username} room={room} />
        )}
      </section>
    </>
  );
}

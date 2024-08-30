import "./Chat.scss";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import { Dropdown } from "primereact/dropdown";

const socket = io.connect("http://localhost:3001");

export default function Chat({ user }) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    }
  }, []);

  const joinRoom = () => {
    if (!username || !room) {
      return;
    } else socket.emit("join_room", room);
    setShowChat(true);
  };

  const groupedLocations = [
    {
      label: "Spanish",
      code: "ES",
      items: [
        { label: "Spain", value: "Spain" },
        { label: "Colombia", value: "Colombia" },
        { label: "Argentina", value: "Argentina" },
        { label: "Mexico", value: "Mexico" },
        { label: "Puerto Rico", value: "Puerto Rico" },
      ],
    },
    {
      label: "Arabic",
      code: "EG",
      items: [
        { label: "Egypt", value: "Egypt" },
        { label: "Levantine", value: "Levantine" },
        { label: "Morrocco", value: "Morrocco" },
        { label: "Saudi Arabia", value: "Saudi Arabia" },
      ],
    },
    {
      label: "Malay",
      code: "SG",
      items: [
        { label: "Singapore", value: "Singapore" },
        { label: "Malaysia", value: "Malaysia" },
        { label: "Indonesia", value: "Indonesia" },
        { label: "Brunei", value: "Brunei" },
      ],
    },
  ];

  const groupedItemTemplate = (option) => {
    return (
      <div className="flex align-items-center chat__options">
        <img
          alt={option.label}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.label}</div>
      </div>
    );
  };

  function handleChange(e) {
    setSelectedLocation(e.value);
    setRoom(e.target.value);
  }

  return (
    <>
      <section className="chat">
        {!showChat ? (
          <div className="chat__container">
            <h3 className="chat__title">Join a chat</h3>
            {user && (
              <input
                className="chat__input"
                value={user.name}
                readOnly={true}
              />
            )}
            {!user && (
              <input
                type="text"
                placeholder="Name..."
                className="chat__input"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            )}
            <div className="card flex justify-content-center">
              <Dropdown
                value={selectedLocation}
                onChange={(e) => handleChange(e)}
                options={groupedLocations}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                optionGroupTemplate={groupedItemTemplate}
                className="w-full md:w-14rem chat__input"
                placeholder="Select a Country"
              />
            </div>
            <button onClick={joinRoom} className="chat__button">
              Join a Room
            </button>
          </div>
        ) : (
          <>
            <ChatMessage socket={socket} username={username} room={room} />

            <button className="chat__back" onClick={() => setShowChat(false)}>
              <p>Go back to country list</p>
            </button>
          </>
        )}
      </section>
    </>
  );
}

import { useState, useEffect } from "react";
import "./ChatMessage.scss";
import Users from "../../components/Users/Users";

export default function Chatmessage({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-page">
      <section className="chat-window">
        <header className="chat-window__header">
          <h2 className="chat-window__title">{`${room} live chat`}</h2>
        </header>
        <section className="chat-window__body">
          {" "}
          <section className="message-container">
            {messageList.map((messageContent, i) => {
              return (
                <div
                  className="message"
                  key={i}
                  id={username === messageContent.author ? "you" : "other"}
                >
                  <div>
                    <div className="message__content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message__meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
        <footer className="message__footer">
          <input
            type="text"
            placeholder="Hey..."
            className="message__input"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyUp={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button className="message__button" onClick={sendMessage}>
            &#9658;
          </button>
        </footer>
      </section>
      <Users className="chat_users" />
    </div>
  );
}

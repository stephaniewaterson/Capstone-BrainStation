export default function Chatmessage({ socket, username, room }) {
  return (
    <section className="chatroom">
      <header className="chatroom__header">
        <h2 className="chatroom__title">Live Chat</h2>
      </header>
      <section className="chatroom__body"></section>
      <footer className="chatroom__footer">
        <input
          type="text"
          placeholder="new message"
          className="chatroom__input"
        />
        <button>&#9658;</button>
      </footer>
    </section>
  );
}

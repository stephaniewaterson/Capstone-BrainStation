import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.scss";

export default function Users() {
  const [allUsers, setAllUsers] = useState(null);
  const showOnlineUsers = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/users/all"
      );
      setAllUsers(response.data);
    } catch (error) {
      setAllUsers(null);
    }
  };

  useEffect(() => {
    showOnlineUsers();
  }, []);

  console.log(allUsers);

  if (!allUsers) {
    return <> Loading users...</>;
  }

  return (
    <>
      <div className="users">
        <header className="users__header">Users</header>
        <div className="users__box">
          {allUsers &&
            allUsers.map((user) => {
              return (
                <div key={user.id} className="users__id">
                  <img src="" alt="" className="users__image" />
                  <p className="users__name">{user.username}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.scss";
import useNetworkStatus from "../NextworkContext/NextworkContext";

export default function Users() {
  const [allUsers, setAllUsers] = useState(null);
  const { isOnline } = useNetworkStatus();

  const showUsers = async () => {
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
    showUsers();
  }, []);

  if (!allUsers) {
    return <> Loading users...</>;
  }

  return (
    <>
      <div className="users">
        <header className="users__header">Users</header>

        {allUsers &&
          allUsers.map((user) => {
            return (
              <>
                <div className="users__box">
                  <div key={user.id} className="users__id">
                    <img
                      src="../../../src/assets/icons/avatar2.png"
                      alt=""
                      className="users__image"
                    />
                    <p className="users__name">{user.username}</p>
                  </div>
                  <div>
                    {isOnline ? (
                      <p className="users__status">🟢 online</p>
                    ) : (
                      <p className="users__status">🔴 offline</p>
                    )}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

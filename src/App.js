import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState("Data");
  const fetchData = async () => {
    setLoader("Data Loading...");
    try {
      const data = await axios.get("./api/users");
      const users = data.data.users;
      setLoader("Data");
      setUsers(users);
    } catch {
      setLoader("ERROR!!!");
    }
  };

  return (
    <div className="App">
      <h1> {loader} </h1>
      <button onClick={fetchData}> Click to load data from server </button>
      <div>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    </div>
  );
}

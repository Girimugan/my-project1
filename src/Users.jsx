import { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditName(user.name);
  };

  
  const handleSave = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: editName } : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="App">
      <table className="bp4-html-table modifier">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>
                {editingUser === user.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>

              <td>{user.email}</td>
              <td>{user.website}</td>

              <td>
                {editingUser === user.id ? (
                  <button onClick={() => handleSave(user.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(user)}>Edit</button>
                )}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

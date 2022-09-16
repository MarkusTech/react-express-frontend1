import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/UserList.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Userlist = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUserList(res.data);
      setLoading(false);
    });
  }, []);

  // Delele users
  const deleteUser = (e, id) => {
    e.preventDefault();
    const deleteBtn = e.target;
    swal("Warning!!!", "Are you sure you want to delete?", "warning", {
      dangerMode: true,
      buttons: true,
    }).then((confirm) => {
      if (!confirm) {
        return;
      }
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          swal("Deleted", res.data.message, "success");
          deleteBtn.closest("tr").remove();
        })
        .catch((err) => {
          swal("Error", "Unable to delelte", "error");
        });
    });
  };

  // Display users
  const renderedUsers = userList.map((user) => {
    return (
      <tr key={user.users_id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <Link className="btn btn-primary" to={`/users/${user.users_id}`}>
            Edit
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(e) => deleteUser(e, user.users_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mt-5">
      <div className={`loader ${loading ? "loading" : ""}`}>
        <h4>Loading...</h4>
      </div>
      <h4>User List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Wenn Mark</td>
            <td>Recopelacion</td>
            <td>wm.recopelacion@gmail.com</td>
          </tr> */}
          {renderedUsers}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;

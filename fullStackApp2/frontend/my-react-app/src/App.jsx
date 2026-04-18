/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [editid, setEditId] = useState(null);

  // fetch the data from the database
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/user");
    // console.log("res", res)
    setUser(res.data.data);
  };
  // console.log("user", user) // debuging - see what inside the user

  // function will call at the first render of the react because of useEffect
  useEffect(() => {
    fetchData().catch((error) => console.log(error));
  }, []);

  // send the to backend -> backend process the data and store -> DB

  const handleSubmit = async (e) => {
    e.preventDefault(); // help from reload the page -> its besically break the default behaviour of the browser

    //create obj
    const data = { name, age, email };

    // check point - trim is remove the space from the start and end of the data - like ->  "    Rahamat" -> remove the space -> "Rahamat"
    if (!name.trim() || !age || !email.trim()) {
      // if any field is empty show alert message. and retuen nothing.
      alert("all fields require");
      return;
    }

    // if editid is available so edit the user otherwise add the user
    try {
      if (editid) {
        // edit
        await axios.put(`http://localhost:3000/api/user/${editid}`, data);
        toast.success("user is updated successfully");
      } else {
        await axios.post("http://localhost:3000/api/user", data);
        toast.success("user is added successfully");
      }
    } catch (error) {
      console.log(error);
    }

    // refresh the data and again fetch data and show all the users on the browser
    fetchData();

    //clear the input filed
    setName("");
    setEmail("");
    setAge("");
  };

  // update the user
  const handleEdit = (usr) => {
    setName(usr.name);
    setAge(usr.age);
    setEmail(usr.email);
    setEditId(usr._id);
  };

  // delete user
  const deleteUser = async (id) => {
    // console.log( "delleting id", id)
    try {
      await axios.delete(`http://localhost:3000/api/user/${id}`);
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* ✅ Toaster sits anywhere once (top level recommended) */}
      {/* <Toaster /> is just a helper component that sits in your app and listens for toast calls. It doesn’t wrap your UI. */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#1f2937", // Tailwind gray-800
            color: "#fff",
          },
        }}
      />
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My React App</h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            value={age}
            placeholder="Your age"
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* USER LIST */}

      <div className="mt-8 w-full max-w-md">
        {user.map((usr) => (
          <div
            key={usr._id}
            className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center"
          >
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold text-blue-600">{usr.name}</h2>

              <p className="text-gray-600">Age: {usr.age}</p>
              <p className="text-gray-600">Email: {usr.email}</p>
            </div>

            <div className="flex flex-col p-5 gap-6">
              <button
                onClick={() => deleteUser(usr._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(usr)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;





/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  // fetch the data from the database

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/user");
    // console.log("res", res)
    setUser(res.data.data);
  };
    // console.log("user", user) // debuging - see what inside the user


  useEffect(() => {
    fetchData().catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //create obj
    const data = { name, age, email };

    // check point
    if (!name.trim() || !age || !email.trim()) {
      alert("all fields require");
      return;
    }

    await axios.post("http://localhost:3000/api/user", data);

    // refresh the data and again fetch
    fetchData();

    //clear the input filed
    setName("");
    setEmail("");
    setAge("");
  };

  // delete user
  const deleteUser = async (id) => {
    // console.log( "delleting id", id)
    try {
      await axios.delete(`http://localhost:3000/api/user/${id}`);

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
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

            <button
              onClick={() => deleteUser(usr._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

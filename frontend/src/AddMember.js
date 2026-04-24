import React, { useState } from "react";
import axios from "axios";

function AddMember() {

  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    image: null
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("role", form.role);
    data.append("email", form.email);
    data.append("image", form.image);

    await axios.post(
      "http://localhost:5000/members",
      data
    );

    alert("Member Added");
  };

  return (
    <div>

      <h2>Add Member</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="file"
          onChange={handleFile}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default AddMember;
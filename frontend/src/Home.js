import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Team Management App</h1>

      <br />

      <Link to="/add">
        <button>Add Member</button>
      </Link>

      <br /><br />

      <Link to="/members">
        <button>View Members</button>
      </Link>

    </div>
  );
}

export default Home;
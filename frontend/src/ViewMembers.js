import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewMembers() {

  const [members, setMembers] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/members")
      .then(res => {
        setMembers(res.data);
      });

  }, []);

  return (
    <div>

      <h2>Members</h2>

      {members.map((m) => (

        <div key={m._id}>

          <h3>{m.name}</h3>

          <p>{m.role}</p>

          <img
            src={`http://localhost:5000/uploads/${m.image}`}
            width="120"
            alt=""
          />

          <br /><br />

          <Link to={`/member/${m._id}`}>
            <button>View Details</button>
          </Link>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default ViewMembers;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MemberDetails() {

  const { id } = useParams();

  const [member, setMember] = useState({});

  useEffect(() => {

    axios.get(`http://localhost:5000/members/${id}`)
      .then(res => {
        setMember(res.data);
      });

  }, [id]);

  return (
    <div>

      <h2>Member Details</h2>

      <h3>{member.name}</h3>

      <p>Role: {member.role}</p>

      <p>Email: {member.email}</p>

      <img
        src={`http://localhost:5000/uploads/${member.image}`}
        width="200"
        alt=""
      />

    </div>
  );
}

export default MemberDetails;
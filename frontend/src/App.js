import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import AddMember from "./AddMember";
import ViewMembers from "./ViewMembers";
import MemberDetails from "./MemberDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<AddMember />}
        />

        <Route
          path="/members"
          element={<ViewMembers />}
        />

        <Route
          path="/member/:id"
          element={<MemberDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
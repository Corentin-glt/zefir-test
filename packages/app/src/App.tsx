import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import CreateUserButton from "./components/CreateUserButton";
import UsersTable from "./view/UsersTable";

function App() {
  return (
    <div className="text-center h-screen">
      <CreateUserButton />
      <UsersTable />
      <ToastContainer />
    </div>
  );
}

export default App;

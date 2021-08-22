import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import CreateUserButton from "./components/CreateUserButton";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="text-center h-screen">
        <CreateUserButton />
        <ToastContainer />
    </div>
  );
}

export default App;

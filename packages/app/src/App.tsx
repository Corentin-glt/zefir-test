import React, { useState } from "react";
import CreateUserButton from "./components/CreateUserButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center h-screen">
        <CreateUserButton />
      {/* <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;

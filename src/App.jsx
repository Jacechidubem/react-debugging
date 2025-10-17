import { useState } from "react";
import Greeting from "./Greeting";
import Counter from "./counter";
import TodoList from "./TodoList";

function App() {
  const [user, setUser] = useState("Joseph");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🧩 React Debugging Practice</h1>

      {/* Fixed prop name */}
      <Greeting name={user} />

      <hr />
      <Counter />

      <hr />
      <TodoList />
    </div>
  );
}

export default App;

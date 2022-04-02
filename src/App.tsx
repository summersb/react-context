import React from "react";
import "./App.css";
import Middle from "./Middle";

export interface MyCtx {
  count: number;
}

export const UserContext = React.createContext<MyCtx>({ count: 0 });

function App() {
  const [count, setCount] = React.useState<number>(0);
  const ctx = { count };
  return (
    <UserContext.Provider value={ctx}>
      <div className="App">
        <input
          type="button"
          onClick={() => setCount(count + 1)}
          value="Click Me"
        ></input>
        <Middle />
      </div>
    </UserContext.Provider>
  );
}

export default App;

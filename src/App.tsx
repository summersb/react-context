import React from "react";
import "./App.css";
import Middle from "./Middle";

export interface MyCtx {
  count: number;
  setCount: (count: number) => void;
}

export const UserContext = React.createContext<MyCtx>({
  count: 0,
  setCount: () => undefined,
});
function App() {
  const [count, setCount] = React.useState<number>(0);
  const ctx = { count, setCount };
  return (
    <UserContext.Provider value={ctx}>
      <div className="App">
        <input
          type="button"
          onClick={() => setCount(count + 1)}
          value="Count Up"
        ></input>
        <Middle />
      </div>
    </UserContext.Provider>
  );
}

export default App;

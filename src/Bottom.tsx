import * as React from "react";
import { UserContext, MyCtx } from "./App";

const Bottom = () => {
  const ctx = React.useContext<MyCtx>(UserContext);
  return <div onClick={() => ctx.setCount(0)}>Reset ({ctx.count})</div>;
};

export default Bottom;

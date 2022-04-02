import * as React from "react";
import { UserContext, MyCtx } from "./App";

interface BottomProps {}

const Bottom = () => {
  const ctx = React.useContext<MyCtx>(UserContext);
  return <div>Bottom {ctx.count}</div>;
};

export default Bottom;

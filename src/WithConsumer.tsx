import * as React from "react";
import { UserContext } from "./App";

const WithConsumer = () => {
  return (
    <UserContext.Consumer>
      {(ctx) => {
        return (
          <div onClick={() => ctx.setCount(ctx.count - 1)}>
            Count Down ({ctx?.count})
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default WithConsumer;

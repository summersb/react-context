import Bottom from "./Bottom";
import WithConsumer from "./WithConsumer";

const Middle = () => {
  return (
    <div>
      Middle
      <WithConsumer />
      <Bottom />
    </div>
  );
};

export default Middle;

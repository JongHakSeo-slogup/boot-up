import React from "react";
import useTimer from "../../hooks/useTimer";

export interface Props {}

const Clock: React.FC<Props> = (props: Props) => {
  const { min, sec } = useTimer();
  /*
   * state method
   */

  /*
   * custom hook
   */

  /*
   * private method
   */

  /*
   * effect cycle
   */

  /*
   * event handler
   */

  /*
   * render method
   */

  return (
    <div>
      {min} : {sec}
    </div>
  );
};

Clock.defaultProps = {};
export default Clock;

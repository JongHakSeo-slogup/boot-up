import React from "react";
import useTimer from "../../hooks/useTimer";

export interface Props {}

const Clock: React.FC<Props> = (props: Props) => {
  /*
   * state method
   */

  const { min, sec, restart } = useTimer();

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
    <>
      <div>
        {min} : {sec}
      </div>
      <button onClick={restart}>(재)시작</button>
    </>
  );
};

Clock.defaultProps = {};
export default Clock;

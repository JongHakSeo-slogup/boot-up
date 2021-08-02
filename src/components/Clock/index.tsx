import React from "react";
import useTimer from "../../hooks/useTimer";

export interface Props {}

const Clock: React.FC<Props> = (props: Props) => {
  /*
   * state method
   */
  /*
   * custom hook
   */
  const { min, sec, startTimer, resetTimer } = useTimer();
  /*
   * private method
   */

  /*
   * effect cycle
   */

  /*
   * event handler
   */
  const onHandleReset = () => {
    resetTimer();
  }
  /*
   * render method
   */

  return (
      <>
        <div>
          {min} : {sec}
        </div>
        <div>
            <button onClick={onHandleReset}>리셋</button>
        </div>
      </>
  );
};

Clock.defaultProps = {};
export default Clock;

import React from "react";
import useTimer from "../../hooks/useTimer";
import Button from '../../elements/Button';
import styled from "styled-components";

export interface Props {}

const Clock: React.FC<Props> = (props: Props) => {

  /*
   * state method
   */
  const [end, setEnd] = React.useState(false);
  const [reset, setReset] = React.useState(false);


  const { min, sec } = useTimer(end, reset);



  /*
   * custom hook
   */


  /*
   * private method
   */
    const startTimer = () => {
        setEnd(false);
        setReset(false);
    }

    const stopTimer = () => {
        setEnd(true);
    }

    const resetTimer = () => {
        setEnd(true);
        setReset(true);
    }

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
    <div style={{width:'300px'}}>
      {min} : {sec}
        <ButtonBox>
            <Button width='200px' height='50px' margin='5px 0px' onClick={startTimer}>start</Button>
            <Button width='200px' height='50px' margin='5px 0px' onClick={stopTimer}>stop</Button>
            <Button width='200px' height='50px' margin='5px 0px' onClick={resetTimer}>reset</Button>
        </ButtonBox>
    </div>
  );
};

Clock.defaultProps = {};

const ButtonBox = styled.div`
  display:flex;
  flex-direction: column;
  margin-top:20px;
  align-items: center;
`;

export default Clock;

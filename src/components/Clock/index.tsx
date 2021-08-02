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


  const { min, sec } = useTimer(end);



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
    <div style={{width:'300px'}}>
      {min} : {sec}
        <ButtonBox>
            <Button width='200px' height='50px' margin='5px 0px' onClick={()=>setEnd(false)}>start</Button>
            <Button width='200px' height='50px' margin='5px 0px' onClick={()=>setEnd(true)}>stop</Button>
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

import React from 'react';
import styled from "styled-components";

const LoadingLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

function Loading() {
    return <LoadingLayout />
};

export default Loading;
import React from 'react';
import {Container} from "./styles";

export interface Props {}

const Main: React.FC<Props> = (props: Props) => {
    return (
        <Container>
            둘러보기 중입니다
        </Container>
    );
};

Main.defaultProps = {};

export default Main;
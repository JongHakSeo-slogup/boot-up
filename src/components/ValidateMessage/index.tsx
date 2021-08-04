import React from "react";

import errorIcon from '../../imgs/error.png';
import checkIcon from '../../imgs/check.png';
import {Container, Icon, IconFigure, Description} from "./styles";

export interface Props {}

const ValidateMessage: React.FC<Props> = (props: Props) => {
    return (
        <Container>
            <IconFigure>
                <Icon src={errorIcon} alt="에러 아이콘"/>
            </IconFigure>
            <Description>
                잘못된 이메일 형식입니다
            </Description>
        </Container>
    );
};

ValidateMessage.defaultProps = {};

export default ValidateMessage;

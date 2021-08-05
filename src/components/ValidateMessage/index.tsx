import React, {useState} from "react";

import errorIcon from '../../imgs/error.png';
import {Container, Icon, IconFigure, Description} from "./styles";

// export interface Props {}

const ValidateMessage: React.FC<any> = ({message}) => {
    return (
        <Container>
            <IconFigure>
                <Icon src={errorIcon} alt="에러 아이콘"/>
            </IconFigure>
            <Description>{message}</Description>
        </Container>
    );
};

ValidateMessage.defaultProps = {};

export default ValidateMessage;

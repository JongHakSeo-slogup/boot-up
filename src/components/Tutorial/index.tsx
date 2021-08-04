import React from 'react';

import tutorialImage from '../../imgs/tutorial.png';

import {Title, Description, ImageFigure, Image, ButtonContainer} from "./styles";
import { BlockBlackBiggerButton } from '../Button/styles';

export interface Props {}

const Tutorial: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Title>모바일 정비명세서</Title>
            <Description>정비 받은 명세서를 쉽고 간편하게 모바일로 관리해보세요</Description>
            <ImageFigure>
                <Image src={tutorialImage} alt="튜토리얼 이미지"/>
            </ImageFigure>
            <ButtonContainer>
                <BlockBlackBiggerButton>
                    카펫 시작하기
                </BlockBlackBiggerButton>
            </ButtonContainer>
        </>
    );
};

Tutorial.defaultProps = {};

export default Tutorial;
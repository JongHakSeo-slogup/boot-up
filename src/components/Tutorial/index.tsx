import React from 'react';

import tutorialImage from '../../imgs/tutorial.png';

export interface Props {}

const Tutorial: React.FC<Props> = (props: Props) => {
    return (
        <>
            <h1>모바일 정비명세서</h1>
            <p>정비 받은 명세서를 쉽고 간편하게 모바일로 관리해보세요</p>
            <img src={tutorialImage} alt="튜토리얼 이미지"/>
            <button>
                카펫 시작하기
            </button>
        </>
    );
};

Tutorial.defaultProps = {};

export default Tutorial;
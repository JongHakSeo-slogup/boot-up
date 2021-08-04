import React from 'react';

export interface Props {}

const Tutorial: React.FC<Props> = (props: Props) => {
    return (
        <div>
            튜토리얼 페이지
        </div>
    );
};

Tutorial.defaultProps = {};

export default Tutorial;
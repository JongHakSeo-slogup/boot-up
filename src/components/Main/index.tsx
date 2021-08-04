import React from 'react';

export interface Props {}

const Main: React.FC<Props> = (props: Props) => {
    return (
        <div>
            메인 페이지!
        </div>
    );
};

Main.defaultProps = {};

export default Main;
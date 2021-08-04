import React from 'react';

export interface Props {}

const Login: React.FC<Props> = (props: Props) => {
    return (
        <div>
            로그인 페이지
        </div>
    );
};

Login.defaultProps = {};

export default Login;
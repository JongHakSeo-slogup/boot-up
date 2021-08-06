import React from 'react';
import {Container} from "./styles";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";

export interface Props {
    look: boolean
}

const Main: React.FC<Props> = ({ look }: Props) => {
    const user: any = useSelector<RootState>(state => state.user.user);
    console.log(look, user);
    return (
        <Container>
            {
                look && !user ? '둘러보는 중입니다' : `${user.row.email}`
            }
        </Container>
    );
};

Main.defaultProps = {};

export default Main;
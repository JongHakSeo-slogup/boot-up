import React, {useEffect} from 'react';
import {Container} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {useLocation} from "react-router";
import {userSlice} from "../../redux/slices/user";

export interface Props {}

const Main: React.FC<Props> = (props: Props) => {
    const user: any = useSelector<RootState>(state => state.user.user);

    const dispatch = useDispatch()
    const location: any = useLocation();
    const isLook = location.state?.isLook;

    useEffect(() => {
        if (!isLook) {
            dispatch(userSlice.actions.getUserInfo());
        }
    }, [isLook, dispatch])

    return (
        <Container>
            {
                isLook && !user && '둘러보는 중입니다'
            }
            {
                !isLook && user && `${JSON.stringify(user.row)}`
            }
        </Container>
    );
};

Main.defaultProps = {};

export default Main;
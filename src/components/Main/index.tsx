import React from 'react';
import {Container} from "./styles";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {TOKEN,USER} from "../../constants/user";
import {useHistory, useLocation} from "react-router";
import URLS from "../../routes/urls";
import {TUTORIAL_VIEWED} from "../../constants/tutorial";

export interface Props {}

const Main: React.FC<Props> = (props: Props) => {
    const user: any = useSelector<RootState>(state => state.user.user);

    const history = useHistory();
    const location: any = useLocation();
    const isLook = location.state?.isLook;

    if (!localStorage.getItem(TUTORIAL_VIEWED)) {
        history.push(URLS.TUTORIAL_PAGE);
    }

    if (!isLook && !user) {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USER);

        history.push(URLS.LOGIN_PAGE);
    }

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
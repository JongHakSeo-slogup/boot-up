import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

interface Props {

}

const Main: React.FC<Props> = (props: Props) => {


    const is_login = useSelector((state:RootState) => state.user.isLogin);
    const user_info = useSelector((state:RootState) => state.user.user);




    return(
        <React.Fragment>
            {is_login ? user_info?.user_eml_addr: '앱 둘러보기'}
        </React.Fragment>
    )
}

export default Main;
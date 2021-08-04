import React from "react";
import {useSelector} from "react-redux";
import {UserState} from "../../redux/slices/user";
import {RootState} from "../../redux/reducers";

function Home(){
    const {user} = useSelector<RootState, UserState>(state => state.user);

    return (
        <div>
            {
                user
                    ? user.name
                    : "둘러보는 중"
            }
        </div>
    )
};

export default Home;
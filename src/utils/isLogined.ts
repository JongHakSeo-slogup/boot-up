import Cookies from "js-cookie";

function isLogined() {
    return !!Cookies.get('x-auth-token') && localStorage.getItem('user');
};

export default isLogined;
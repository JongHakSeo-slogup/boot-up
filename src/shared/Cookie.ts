const setCookie = (name: string, value: string) => {
    let date = new Date();

    date.setTime(date.getTime() + 1 * 1000 * 60 * 60 * 24 * 30);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 쿠키 삭제
const deleteCookie = (name: string) => {
    let date = new Date("2020-01-01").toUTCString();

    console.log(date);

    document.cookie = name+"=; expires="+date+";path=/";

};

const getCookie = (name: string) => {
    let value = "; "+document.cookie;

    let parts = value.split(`; ${name}=`);


    if (parts.length === 2) {
        return parts.pop()!.split(";").shift();
    }
}

export { setCookie, deleteCookie, getCookie };
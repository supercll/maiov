import HTTP from "./http";
export default function logout(data) {
    return function (dispatch) {
        return HTTP.post("/user/logout", data).then(res => {
            // console.log(res)
            if (res.data.code === 0) {
                dispatch({
                    type: "LOGOUT",
                });
            }
        });
    };
}
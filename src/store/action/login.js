import http from "./http";

export default function login() {
    return function(dispatch) {
        http.post("/user/login").then(res => {
            console.log(res);
        })
    }
}
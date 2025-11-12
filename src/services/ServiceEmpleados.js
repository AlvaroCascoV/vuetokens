import axios from "axios";
import Global from "@/Global";

export default class ServiceEmpleados {
    login(loginInfo) {
        return new Promise(function (resolve) {
            let request = "Auth/Login"
            let url = Global.urlApiEmpleados + request
            axios.post(url, loginInfo).then(response => {
                resolve(response.data)
            })
        })
    }
}
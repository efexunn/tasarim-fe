import axios from "axios";

class AuthManager{
    LoginUser(username:string , password:string){
        return axios.post("/api/Auth/LoginUser", {Firstname:"", Lastname:"", Username:username, Password:password, Email:username, PhoneNumber:""})
    }

    RegisterUser(firstname:string, lastname:string, username:string, password:string, email:string, phone:string){
        return axios.post("/api/Auth/RegisterUser", {Firstname:firstname, Lastname:lastname, Username:username, Password:password, Email:email, PhoneNumber:phone})
    }

    
}

export default AuthManager;
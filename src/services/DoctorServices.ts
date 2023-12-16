import axios from "axios"


export class DoctorService{
    getDoctors = () => {
        return axios.get("https://localhost:44367/api/values");
    }
}
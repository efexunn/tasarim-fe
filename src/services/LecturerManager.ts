import axios from "axios"


export class LecturerService{
    getCengLecturers = () => {
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }
}
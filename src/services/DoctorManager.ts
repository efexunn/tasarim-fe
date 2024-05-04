import axios from "axios"


export class DoctorManager{
    getDoctors = () => {
        return axios.get("https://localhost:44394/Home/GetDoctors");
    }

    GetDoctorsFiltered(hospitalId:number, policlinicId:number,  titleId:number){
        let temp = JSON.stringify({ "hospitalId": hospitalId, "policlinicId": policlinicId, "titleId": titleId});
        return axios.post("https://localhost:44394/Home/GetDoctorsWithFilter", temp,{ headers: {
            'Content-Type': 'application/json'
          }});
    } 
}
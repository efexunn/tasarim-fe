import axios from "axios"


export class DoctorManager{
    getDoctors = () => {
        return axios.get("/api/HomeApi/GetDoctors", {headers:{"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`} });
    }

    GetDoctorsFiltered(hospitalId:any, policlinicId:any,  titleId:any){
        let temp = JSON.stringify({HospitalId:hospitalId, PoliclinicId:policlinicId, TitleId:titleId});
        return axios.post("/api/HomeApi/GetDoctorsWithFilter",temp , {headers:{"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`} });
    } 

    GetDoctorsByDoctorName(doctorName:string){
        return axios.post("/api/HomeApi/GetDoctorsByDoctorName",JSON.stringify(doctorName) ,{headers:{"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`} });
    }
    
    GetFavoritesByUserId(userId:any){
        return axios.post("/api/HomeApi/GetFavoritesByUserId",JSON.stringify(userId) ,{headers:{"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`} });
    }

    AddFavorites(userId:any, doctorId:any){
        return axios.post("/api/HomeApi/AddFavorites",JSON.stringify({DoctorId:doctorId, UserId:userId}) ,{headers:{"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`} });
    }

    RemoveFavorites(userId:any, doctorId:any){
        return axios.post("/api/HomeApi/RemoveFavorites",JSON.stringify({DoctorId:doctorId, UserId:userId}) ,{headers:{"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`} });
    }    

}
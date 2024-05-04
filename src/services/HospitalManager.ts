import axios from "axios";

class HospitalManager{
    GetHospitals(){
        return axios.get("https://localhost:44394/Home/GetHospitals");
    }

    ConvertHospitalsToSelectModel(hospitalList:Array<any>) : Array<SelectModel>{
        let teneke = new Array<SelectModel>();
        hospitalList.map(item=>{
            teneke.push({value : item.Id, label : item.HospitalName});
        })
        return teneke;
    }
}

export default HospitalManager;
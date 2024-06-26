import axios from "axios";

class PoliclinicManager{
    GetPoliclinics(){
        return axios.get("/api/HomeApi/GetPoliclinics");
    }

    ConvertPoliclinicsToSelectModel(policlinicList:Array<any>) : Array<SelectModel>{
        let teneke = new Array<SelectModel>();
        policlinicList.map(item=>{
            teneke.push({value : item.Id, label : item.PoliclinicName});
        })
        return teneke;
    }
}

export default PoliclinicManager;
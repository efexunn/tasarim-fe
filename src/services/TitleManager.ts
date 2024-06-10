import axios from "axios";

class TitleManager{
    GetTitles(){
        return axios.get("/api/HomeApi/GetTitles");
    }

    ConvertTitlesToSelectModel(titleList:Array<any>) : Array<SelectModel>{
        let teneke = new Array<SelectModel>();
        titleList.map(item=>{
            teneke.push({value : item.Id, label : item.TitleName});
        })
        return teneke;
    }
}

export default TitleManager;
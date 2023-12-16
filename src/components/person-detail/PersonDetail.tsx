import React, { useState } from 'react'
import "./persondetail.scss"
interface Props{
    doctorObj : LecturerModel
}
const PersonDetail = ({doctorObj} : Props) => {
    //let [doctor, setDoctor] = useState<LecturerModel>(doctorObj)
  return (
    <div className='personDetail'>
        <div className="image">
            <img src="https://www.acibadem.com.tr/assets/images/doctors/cagri-buke-banner.png" alt="" />
        </div>
        <div className="informations">
            <span style={{fontSize: "4vh", textTransform: "capitalize", paddingTop:"1vh"}}>{doctorObj.FullName}</span>
            <span style={{fontSize: "2.2vh", paddingTop:"2vh"}}>{doctorObj.TelephoneNumber}</span>
            <span style={{fontSize: "2.2vh", textTransform: "capitalize"}}>{doctorObj.Adress}</span>
            <span style={{fontSize: "2.2vh"}}>{doctorObj.Email}</span>
            <a style={{fontSize: "2.2vh"}}>{doctorObj.AvesisLink}</a>
        </div>
    </div>
  )
}

export default PersonDetail
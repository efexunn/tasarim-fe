import React, { useState } from 'react'
import "./persondetail.scss"
interface Props{
    doctorObj : DoctorModel
}
const PersonDetail = ({doctorObj} : Props) => {
    
  return (
    <div className='personDetail'>
        <div className="image">
            <img src={doctorObj.DoctorImageLink} alt=""/>
        </div>
        <div className="informations">
            <span style={{fontSize: "4vh", textTransform: "capitalize", paddingTop:"1vh"}}>{doctorObj.DoctorName}</span>
            <span style={{fontSize: "2.2vh", paddingTop:"2vh"}}>{doctorObj.DoctorTitleName}</span>
            <span style={{fontSize: "2.2vh", textTransform: "capitalize"}}>{doctorObj.DoctorHospitalName}</span>
            <span style={{fontSize: "2.2vh"}}>{doctorObj.DoctorEmail}</span>
            <span style={{fontSize: "2.2vh"}}>{doctorObj.DoctorPoliclinicName}</span>
        </div>
    </div>
  )
}

export default PersonDetail
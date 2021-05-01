import React from "react";
import Photo from "./photodeprofil.jpg";




function ProfilePhoto () {
    return (
        <>
<img src={Photo} alt="photoprofil" style={{width:200, height:200}}/>
        </>
    );
}


export default ProfilePhoto;
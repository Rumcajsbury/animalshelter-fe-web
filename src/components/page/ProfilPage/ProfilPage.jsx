import React, {useEffect, useState} from "react";
import WebService from '../../../service/WebService';

const ProfilPage = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() =>{
    WebService.get("donor/details",null ,)
    .then(function(response) {
      console.log(response);
      setUserInfo(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  },[]);
  return <h1>Welocem profil page</h1>;
};

export default ProfilPage;

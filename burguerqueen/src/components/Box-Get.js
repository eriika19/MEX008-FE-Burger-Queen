import React from 'react';
import { Button } from 'reactstrap';
import logo from "../imgFED/logo.pnd"



const Login=()=>{
    return(
    <seccion className={"login"}>
      <div>
        <img className="img-log" src={logo}/>
      <Button className="btn-login" color="secondary">INICIA SESIÓN</Button>
        </div>
     </seccion>
     );
}
export default Login;
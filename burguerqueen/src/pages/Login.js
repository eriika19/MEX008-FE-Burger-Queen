import React from 'react';
import { Button } from 'reactstrap';
import mesereando from '../imgFED/mesereando.png';

const Login = () => {
  return (
    <seccion className="login">
      <div>
        <img className={"img-log"} src={mesereando} alt="logo" />
        <Button className={"btn-login"} color="secondary">
          INICIA SESIÓN
        </Button>
      </div>
    </seccion>
  );
};
export default Login;

import React from 'react';
<<<<<<< HEAD
import BoxGet from "../components/BoxGet";


const GetIn = () => {
    return (
        <section>
            <div>
            <BoxGet/>
            </div>    
        </section>
    );
}

export default GetIn;
=======
import {FormGroup, Label, Input, Button} from 'reactstrap';
import mesereando from '../imgFED/mesereando.png';

const GetIn = () => {
  return (
    <div className="form-in">
      <img className={'img-log'} src={mesereando} alt="logo" />
      <h1>EQUIPO</h1>
      <FormGroup>
        <Label for="exampleEmail">Nombre</Label>
        <Input type="email" name="email" id="example" placeholder="Mariana" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Contraseña</Label>
        <Input
          type="password"
          name="password"
          id="example"
          placeholder="password"
        />
      </FormGroup>
      <Button className="btn-login" color="secondary">
        FINALIZAR
      </Button>
    </div>
  );
};
export default GetIn;
>>>>>>> 1e54ba129be373f28f9794a633dedbda7bcb54d2

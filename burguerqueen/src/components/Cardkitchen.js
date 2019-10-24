import React from 'react';
// import { Card, CardTitle, CardText, CardHeader } from 'reactstrap';
import { Table } from 'reactstrap';

class Cardkitchen extends React.Component {
  render() {
    return (
      <div className="orderkitchen">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ORDEN/NOMBRE</th>
              <th>CANT</th>
              <th>PLATILLO</th>
              <th>HORA DE PEDIDO</th>
              <th>HORA DE ENTREGA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">4</th>
              <td>ENRIQUE</td>
              <td>1</td>
              <td>SOBERBIA</td>
              <td>13:00</td>
              <td>00:00</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>MARIANA</td>
              <td>1</td>
              <td>HELL GIRL</td>
              <td>12:40</td>
              <td>00:00</td>
            </tr>
            <tr className="p-3 mb-2 bg-success text-white">
              <th scope="row">2</th>
              <td>ADRIANA</td>
              <td>2</td>
              <td>LUJURIA</td>
              <td>12:33</td>
              <td>00:00</td>
            </tr>
            <tr className="p-3 mb-2 bg-secondary text-white">
              <th scope="row">1</th>
              <td>LORENA</td>
              <td>1</td>
              <td>MALICIA</td>
              <td>13:00</td>
              <td>13:20</td>
            </tr>
          </tbody>
        </Table>

        <Table bordered>
          <thead>
            <tr>
              <th>RECIBIDO</th>
              <th className="p-3 mb-2 bg-success text-white">EN PROCESO</th>
              <th className="p-3 mb-2 bg-secondary text-white">SERVIDO</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default Cardkitchen;

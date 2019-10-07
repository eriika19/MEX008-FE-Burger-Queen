import React from 'react';
import { Table, CardImg } from 'reactstrap';
import NumericInput from 'react-numeric-input';

import Confirmation from './Confirmation';

import Delete from '../assets/delete.png';
import Edit from '../assets/edit.png';

class Boxfinish extends React.Component {
  constructor() {
    super();
    this.state = {
      client: {
        name: '',
        order: '',
        total: ''
      }
    };
  }

  componentDidMount() {
    const order = JSON.parse(localStorage.getItem('order'));
    let total;
    if (order) {
      const orderPrices = order.map(item => {
        return item.quantity * item.price;
      });
      total = orderPrices.reduce((a, b) => a + b, 0);
    } else {
      total = 0;
    }

    const clientName = localStorage.getItem('clientName')
      ? localStorage.getItem('clientName').toUpperCase()
      : '';

    // const order = JSON.parse(localStorage.getItem('order'));

    this.setState({
      client: {
        name: clientName,
        order: order,
        total: total
      }
    });
  }

  onChange(product, e, price) {
    const order = JSON.parse(localStorage.getItem('order'));
    const index = order.findIndex(item => item.product === product);
    order.splice(index, 1);

    const updateProduct = {
      product: product,
      quantity: e,
      price: price
    };
    order.push(updateProduct);

    localStorage.setItem('order', JSON.stringify(order));
  }

  deleteProduct(product) {
    const order = JSON.parse(localStorage.getItem('order'));
    const index = order.findIndex(item => item.product === product);
    order.splice(index, 1);

    localStorage.setItem('order', JSON.stringify(order));
  }

  render() {
    return (
      <div className="card bg-light">
        <div className="btn btn-dark btn-lg btn-block box-header">
          ORDEN DE: <p>{this.state.client.name}</p>
        </div>
        <div className="card-body">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Cantidad</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.client.order ? (
                this.state.client.order.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td className={'product'}>{item.product}</td>
                    <td className={'td-quantity'}>
                      <NumericInput
                        className={'form-control quantity'}
                        min={0}
                        max={50}
                        value={item.quantity}
                        onChange={e =>
                          this.onChange(item.product, e, item.price)
                        }
                      />
                    </td>
                    <td>${item.price}</td>
                    <td className={'td-icon'}>
                      <CardImg width="7px" src={Delete} alt="delete" onClick={() => this.deleteProduct(item.product)}/>
                      <CardImg
                        width="7px"
                        src={Delete}
                        alt="delete"
                        onClick={() => this.deleteProduct(item.product)}
                      />
                    </td>
                    <td className={'td-icon'}>
                      <CardImg width="7px" src={Edit} alt="edit"/>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th scope="row">No</th>
                  <td>hay items</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        <Table className={'total'}>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>SUBTOTAL</th>
            <th>${this.state.client.total}</th>
          </tr>


        </Table>

        <div className="card-footer text-muted d-flex justify-content-center footer-dark">
          <Confirmation
            class="btn finish-dark og-hover"
            buttonLabel={this.props.footerText}
            title="RECUERDA CONFIRMAR CON EL CLIENTE ANTES DE ENVIAR LA ORDEN A COCINA"
          />
        </div>
      </div>
    );
  }
}

export default Boxfinish;

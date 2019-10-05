import React from 'react';
import { Table} from 'reactstrap';
import NumericInput from 'react-numeric-input';

class Boxconfirmation extends React.Component {
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

  onChange(product, quantity, price) {
    const order = JSON.parse(localStorage.getItem('order'));
    const index = order.findIndex(item => item.product === product);
    order.splice(index, 1);

    const updateProduct = {
      product: product,
      quantity: quantity + 1,
      price: price
    };
    order.push(updateProduct);

    localStorage.setItem('order', JSON.stringify(order));
  }

  render() {
    return (
      <div className="bg-light">
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
                    <td>{item.product}</td>
                    <td>
                      <NumericInput
                        className={'form-control'}
                        min={0}
                        max={50}
                        value={item.quantity}
                        onChange={() =>
                          this.onChange(item.product, item.quantity, item.price)
                        }
                      />
                    </td>
                    <td>${item.price}</td>
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
      </div>
    );
  }
}

export default Boxconfirmation;

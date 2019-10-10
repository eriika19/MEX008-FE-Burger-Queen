import React from 'react';
import { Table, Spinner } from 'reactstrap';
import ModalUI from './Modal';

export default class Boxtip extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendations: null
    };
  }

  componentDidMount() {
    fetch('./data/Recommendations.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          recommendations: data
        });
      });
  }

  render() {
    //  console.log(this.state.recommendations);
    return (
      <div className="card bg-light">
        <div className="btn btn-dark btn-lg btn-block box-header">
          RECOMENDACIONES
        </div>
        <div className="card-body">
          <Table striped>
            <tbody>
              {this.state.recommendations ? (
                this.state.recommendations.map((recommendation, i) => (
                  <tr key={i}>
                    <td>{recommendation}</td>
                  </tr>
                ))
              ) : 
                (
                  <Spinner color="info" style={{ width: '3rem', height: '3rem' }} />
                )
              }
            </tbody>
          </Table>
          {/*       <ListGroup>
         {
             this.state.recommendations ? 
             this.state.recommendations.map(recommendation => (            
          <ListGroupItem>{recommendation}</ListGroupItem> 
          )) :
          <div>No hay recomendaciones</div>
        } 
      </ListGroup> */}
        </div>
        <div className="card-footer text-muted d-flex justify-content-center footer-dark">
          <ModalUI
            class="btn finish-dark og-hover"
            buttonLabel="ABRIR ORDEN"
            title="¿A QUÉ NOMBRE VA A QUEDAR LA ORDEN?"
          />
        </div>
      </div>
    );
  }
}

import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import ItemDrop from './ItemDrop';

export default class ItemDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: '',
      prices: '',
      typeFood: '',
      subsection: '',
    };
  }

  componentDidMount() {
    this.setState({
      menu: this.props.menu,
      prices: this.props.prices,
      typeFood: this.props.typefood
    });
  }

  setSubsection(data) {
    this.setState({
      subsection: data
    });
  }

  static getDerivedStateFromProps(props, state) {
    const order = JSON.parse(localStorage.getItem('order'));

    const clientName = localStorage.getItem('clientName')
    ? localStorage.getItem('clientName').toUpperCase()
      : '';
    
      let total;
      if (order) {
        const orderPrices = order.map(item => {
          return item.quantity * item.price;
        });
        total = orderPrices.reduce((a, b) => a + b, 0);
      } else {
        total = 0;
      }
    
    return {
      version: props.orderVersion, 
      client: {
        name: clientName,        
        order: order,
        total: total
      }
    };

  }
 
  render() {
    const { typeFood, menu } = this.state;
    if (!typeFood || !menu) {
      return (
        <DropdownMenu>
          <DropdownItem>
            <Badge color="dark" pill>
              No hay data para menú
            </Badge>
          </DropdownItem>
        </DropdownMenu>
      );
    }
    if (typeFood === 'POSTRES') {
      return (
        <DropdownMenu>
          {this.state.menu.POSTRES.map((item, i) => (
            <DropdownItem
              key={`postres-items-${i}`}
              toggle={false}
              onClick={() => this.props.addItem(item, this.state.prices[item], this.props.updateVersion)}
            >
              <Badge color="dark" pill>
                {item}
              </Badge>
            </DropdownItem>
          ))}
        </DropdownMenu>
      );
    }
    if (typeFood === 'COMIDA') {
      return (
        <div>
          <DropdownMenu>
            {Object.keys(this.state.menu.COMIDA).map((subsection, i) => (
              <DropdownItem
                key={i}
                toggle={false}
                data-subsection={subsection}
                onClick={() => {
                  this.setSubsection(subsection);
                }}
              >
                <Badge color="dark" pill>
                  {subsection}
                </Badge>
              </DropdownItem>
            ))}
            <ItemDrop
              subsection={this.state.subsection}
              menu={this.state.menu.COMIDA[this.state.subsection]}
              prices={this.state.prices}
              addItem={this.props.addItem}
              updateVersion={this.props.updateVersion}
            />
          </DropdownMenu>
        </div>
      );
    }

    if (typeFood === 'BEBIDAS') {
      return (
        <div>
          <DropdownMenu>
            {Object.keys(this.state.menu.BEBIDAS).map((subsection, i) => (
              <DropdownItem
                key={i}
                toggle={false}
                data-subsection={subsection}
                onClick={() => {
                  this.setSubsection(subsection);
                }}
              >
                <Badge color="dark" pill>
                  {subsection}
                </Badge>
              </DropdownItem>
            ))}
            <ItemDrop
              subsection={this.state.subsection}
              menu={this.state.menu.BEBIDAS[this.state.subsection]}
              prices={this.state.prices}
              addItem={this.props.addItem}
              updateVersion={this.props.updateVersion}
            />
          </DropdownMenu>
        </div>
      );
    }
  }
}

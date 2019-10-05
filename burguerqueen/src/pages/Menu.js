import React from 'react';

import { ButtonDropdown, DropdownToggle, CardImg, Spinner } from 'reactstrap';
import Nav from '../components/Navbar';
import Boxfinish from '../components/Boxfinish';
import ItemDropdown from '../components/ItemDropdown';

import { ClientProvider } from '../ClientContext';

import img from '../assets';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      menu: '',
      img: '',
      prices: '',
      user: '',
      client: {
        name: ''
      },

      dropdownOpen: {}
    };
  }

  componentDidMount() {
    fetch('./data/Menu.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          menu: data.MENU,
          img: data.IMG,
          prices: data.PRICES
        });
      });
    
    const clientName = localStorage.getItem('clientName') ?
      localStorage.getItem('clientName').toUpperCase() :
      '';

    this.setState({
      client: {
        name: clientName,
        order: JSON.parse(localStorage.getItem('order'))
      }
    });
  }

  toggle(element) {
    this.setState({
      dropdownOpen: {
        ...!this.state.dropdownOpen,
        [element]: !this.state.dropdownOpen[element]
      }
    });
  }

  addItem(item, price) {
    const newOrder = JSON.parse(localStorage.getItem('order'));

    const newProduct = {
      product: item,
      quantity: 1,
      price: price
    };

    newOrder.push(newProduct);
    //console.log(newOrder); 
    localStorage.setItem('order',  JSON.stringify(newOrder));
  }

  render() {
    const env = {
      user: this.state.user,
    };

    if (!this.state.menu) {
      return (
        <Spinner color="info" style={{ width: '3rem', height: '3rem' }} />
      );
    }
    return (
      <ClientProvider value={env}>
        <section className="bg-soft">
          <Nav />
          <Boxfinish
            clientName={this.state.client.name}
            footerText="FINALIZAR"
          />
          {Object.keys(this.state.menu).map((option, i) => (
            <ButtonDropdown
              key={i}
              data-typefood={option}
              className="menu-icon"
              isOpen={this.state.dropdownOpen[option]}
              toggle={() => this.toggle(option)}
            >
              <DropdownToggle caret>
                <CardImg
                  data-typefood={option}
                  bottom
                  width="87px"
                  height="87px"
                  src={img[this.state.img[option]]}
                  alt={option}
                />
                <p data-typefood={option}>{option}</p>
              </DropdownToggle>
              <ItemDropdown
                key={i}
                typefood={option}
                menu={this.state.menu}
                prices={this.state.prices}
                addItem={this.addItem}
              />
              {/* {(this.state.typeFood && this.state.typeFood === element) ?
      <ItemDropdown key={i}  typefood={element} menu={this.state.menu} prices={this.state.prices.element}/> :
      ""
      } */}
            </ButtonDropdown>
          ))}
        </section>
      </ClientProvider>
    );
  }
}

export default Menu;

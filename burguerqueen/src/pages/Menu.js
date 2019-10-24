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
      version: 0,

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

    const clientName = localStorage.getItem('clientName')
      ? localStorage.getItem('clientName').toUpperCase()
      : '';

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

  addItem(item, price, callback) {
    const newOrder = JSON.parse(localStorage.getItem('order'));

    const newProduct = {
      product: item,
      quantity: 1,
      price: price
    };

    newOrder.push(newProduct);
    //console.log(newOrder);
    localStorage.setItem('order', JSON.stringify(newOrder));
    callback();
  }

  updateVersion() {
    console.log('update order Version');
    this.setState({ version: this.state.version + 1 });
  }
  updateItem() {
    console.log('update item Version');
    this.setState({ version: this.state.version + 1 });
  }
  updateMenu() {
    console.log('update menu Version');
    this.setState({ version: this.state.version + 1 });
  }

  render() {
    const env = {
      user: this.state.user
    };

    if (!this.state.menu) {
      return <Spinner color="info" style={{ width: '3rem', height: '3rem' }} />;
    }
    return (
      <ClientProvider value={env}>
        <section className="bg-soft">
          <Nav />
          <Boxfinish
            clientName={this.state.client.name}
            footerText="FINALIZAR"
            orderVersion={this.state.orderVersion}
            itemVersion={this.state.itemVersion}
            updateVersion={this.updateVersion.bind(this)}
            updateItem={this.updateItem.bind(this)}
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
                menuVersion={this.state.version}
                updateVersion={this.updateVersion.bind(this)}
                updateMenu={this.updateMenu.bind(this)}
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

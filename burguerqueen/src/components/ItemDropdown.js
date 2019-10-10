import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import ItemDrop from './ItemDrop';

export default class ItemDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: '',
      prices: '',
      typeFood: '',
      subsection: '',
      sub: '',
      version: props.menuVersion
    };
  }

  componentDidMount() {
    this.setState({
      menu: this.props.menu,
      prices: this.props.prices,
      typeFood: this.props.typefood,
    });
  }

  setSubsection(data) {
    this.setState({
      subsection: data
  }, () => {
    this.props.updateMenu();
  });
  
    // this.setState({
    //   subsection: data
    // })

    // callback();      


    // if (this.state.subsection === data) {
    //   callback();      
    // } else {
    //   this.setState({
    //     subsection: data
    //   });
    //   console.log(this.state.subsection);
      
    //   callback(); 
    // }
  }

  static getDerivedStateFromProps(props, state) {   
    return {
      menu: props.menu,
      prices: props.prices,
      typeFood: props.typefood,
      version: props.menuVersion, 
      subsection: state.subsection
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
                key={`${i}-tb-${this.state.version}-t-${this.state.subsection}`}
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
              key={`tb-${this.state.version}-t-${this.state.subsection}`}              
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
                key={`${i}-tb-${this.state.version}-t-${this.state.subsection}`}
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
              key={`tb-${this.state.version}-t-${this.state.subsection}`}                            
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

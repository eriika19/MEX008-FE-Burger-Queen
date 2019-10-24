import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class Drop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    console.log(e.target);
    if (e.target.dataset.typefood !== "typefood") {
  
    } 
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    this.props = {
      text, 
      typeFood,
    }
      
    return (
        <DropdownMenu>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        <Btn text={text}  class="btn btn-dark og-hover" data-typefood={typeFood}/>
        </DropdownToggle>        
        </Dropdown>
        </DropdownMenu>
    );
  }
}


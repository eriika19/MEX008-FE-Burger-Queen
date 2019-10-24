import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';

export default class ItemDrop extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: '',
      prices: '',
      subsection: ''
    };
  }

  componentDidMount() {
    this.setState({
      menu: this.props.menu,
      prices: this.props.prices,
      subsection: this.props.subsection
    });
  }

  render() {
    const { menu, subsection } = this.state;

    if (!subsection || !menu) {
      return '';
    }
    return (
      <DropdownMenu>
        {menu.map((item, i) => (
          <DropdownItem
            key={i}
            data-item={item}
            toggle={false}
            onClick={() =>
              this.props.addItem(
                item,
                this.state.prices[item],
                this.props.updateVersion
              )
            }
          >
            <Badge color="dark" data-item={item} pill>
              {item}
            </Badge>
          </DropdownItem>
        ))}
      </DropdownMenu>
    );
  }
}

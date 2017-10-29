import React, {Component} from 'react';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      MenuIsOpen: false
    }
  }

  render() {
    return (
      <div className="nav nav__left nav--orange">Navbar</div>
    )
  }
}

export default Navbar;

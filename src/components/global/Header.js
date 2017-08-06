import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';

import './css/Header.css';

class Header extends Component {

  render() {

    return (
      <div className="NewHeader">
        <AppBar
          title="Productos"
          iconElementRight={
            <div>
              <IconMenu
                iconButtonElement={<IconButton iconStyle={{color: white}}><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem primaryText="Nuevo Producto" onClick={this.props.TriggerOpenNewProduct} />
              </IconMenu>
              </div>
          }
        />
      </div>
    );
  }
}

export default Header;

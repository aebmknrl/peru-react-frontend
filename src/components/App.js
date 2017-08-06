// Dependences
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// CSS
import './global/css/App.css';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      openAddNewProduct: false
    }

    this.openNewProduct = this.openNewProduct.bind(this);
    this.closeNewProduct = this.closeNewProduct.bind(this);
  }
  openNewProduct(){
    this.setState({
      openAddNewProduct: true
    })
   
  }
  closeNewProduct(){
    this.setState({
      openAddNewProduct: false
    })
   
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header TriggerOpenNewProduct={this.openNewProduct} />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Content 
            openAddNewProduct={this.state.openAddNewProduct} 
            TriggerCloseNewProduct={this.closeNewProduct} 
            />
        </MuiThemeProvider>
        <Footer copyright="&copy; 2017 Ali Briceño #buildtheweb"/>
      </div>
    );
  }
}

export default App;

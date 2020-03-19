import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './store/reducers';

import Layout from './components/common/Layout';
import GlobalStyle from './components/common/GlobalStyle';
import Container from './components/grid/Container';
import HeaderContainer from './components/header/HeaderContainer';
import ElementsContainer from './components/element/ElementsContainer';
import PopupsContainer from './components/popup/PopupsContainer';

const settings = {
  proxy: 'https://cors-anywhere.herokuapp.com/',
  server: 'https://api.darksky.net/forecast/',
  key: '60fdaef213cea5b3365a03a6d95aec60',
  latitude: '43.5971336',
  longitude: '39.7243355'
}

const store = createStore(reducers);

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      elements: (localStorage.getItem('data') !== null)
        ? JSON.parse(localStorage.getItem('data'))
        : [],
      popup: null,
      deleted: null
    }
  }

  showPopups = () => {
    return (this.state.popup !== null) && {visible: true}
  }

  showAddPopup = e => {    
    e.preventDefault();

    this.setState({
      ...this.state,
      popup: 'add'
    })
  }

  showRemovePopup = zone => {    
    this.setState({
      ...this.state,
      popup: 'remove',
      deleted: zone
    })
  }

  hidePopup = () => {
    this.setState({
      ...this.state,
      popup: null
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <HeaderContainer showAddPopup={this.showAddPopup} />
          <Container>
            <ElementsContainer showRemovePopup={this.showRemovePopup} getDeletedLocation={this.getDeletedLocation} />
          </Container>
          <PopupsContainer 
            {...this.state} 
            hidePopup={this.hidePopup} 
            showPopups={this.showPopups} 
            settings={settings} 
            deleted={this.state.deleted}
          />
          <GlobalStyle />
        </Layout>
      </Provider>
    )
  }
}

import React from 'react';

import Header from './Header';
import HeaderTitle from './HeaderTitle';
import HeaderButton from './HeaderButton';

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Header>
        <HeaderTitle>Weather Inspector</HeaderTitle>
        <HeaderButton onClick={this.props.showAddPopup}>Add location</HeaderButton>
      </Header>
    )
  }
}
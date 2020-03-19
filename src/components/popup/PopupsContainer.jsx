import React from 'react';

import { connect } from 'react-redux';
import { addLocation, removeLocation } from '../../store/elements/actions';

import Popups from './Popups';
import Popup from './Popup';
import Overlay from './Overlay';
import PopupTitle from './PopupTitle';
import PopupForm from './PopupForm';
import PopupInput from './PopupInput';
import PopupButton from './PopupButton';

class PopupsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  setLocationToState = e => {
    this.setState({
      location: e.target.value
    })
  }

  handleAddLocation = e => {
    e.preventDefault();
    
    const latitude = this.state.location.split(',')[0];
    const longitude = this.state.location.split(',')[1];

    this.props.hidePopup();

    const id = (JSON.parse(localStorage.getItem('data')) === null)
      ? 0
      : JSON.parse(localStorage.getItem('data')).length

    fetch(`${this.props.settings.proxy}${this.props.settings.server}${this.props.settings.key}/${latitude},${longitude}`)
      .then(response => {
        return response.json()
      })
      .then(data => {      
        this.props.addLocation(
          id,
          data.latitude,
          data.longitude,
          data.timezone,
          data.currently.temperature,
          data.currently.appTemperature,
          data.currently.summary,
          data.currently.icon
        );
      })    
  }

  handleRemoveLocation = () => {
    this.props.hidePopup();
    
    this.props.removeLocation(this.props.deleted);
  }

  handleClosePopup = e => {
    e.preventDefault();

    this.props.hidePopup();
  }

  componentDidMount() {
    (localStorage.getItem('data') === null) &&
      fetch(`${this.props.settings.proxy}${this.props.settings.server}${this.props.settings.key}/${this.props.settings.latitude},${this.props.settings.longitude}`)
      .then(response => {
        return response.json()
      })
      .then(data => {      
        this.props.addLocation(
          this.props.elements.length,
          data.latitude,
          data.longitude,
          data.timezone,
          data.currently.temperature,
          data.currently.appTemperature,
          data.currently.summary,
          data.currently.icon
        );
      })
  }

  render() {
    return (
      <Popups {...this.props.showPopups()}>
        <Overlay></Overlay>
        <Popup>
          <PopupTitle>{(this.props.popup === 'add')
            ? `Insert the location coordinates`
            : `Are you sure you want to remove this location?`
          }</PopupTitle>
          {(this.props.popup === 'add')
            ? <PopupForm>
              <PopupInput type="text" onChange={this.setLocationToState} value={this.state.location} />
              <PopupButton onClick={this.handleAddLocation}>Add</PopupButton>
            </PopupForm>
            : <PopupForm>
              <PopupButton onClick={this.handleRemoveLocation}>Yes</PopupButton>
              <PopupButton>No</PopupButton>
            </PopupForm>
          }
        </Popup>
      </Popups>
    )
  }
}

const mapDispatchToProps = {
  addLocation,
  removeLocation
}

export default connect(null, mapDispatchToProps)(PopupsContainer);
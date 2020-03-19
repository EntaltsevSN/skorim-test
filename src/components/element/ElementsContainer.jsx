import React from 'react';
import Skycons from 'react-skycons';

import { connect } from 'react-redux';
 
import Element from './Element';
import ElementButton from './ElementButton';
import ElementTimezone from './ElementTimezone';
import ElementCoords from './ElementCoords';
import ElementData from './ElementData';
import ElementTemp from './ElementTemp';
import ElementTempStandard from './ElementTempStandard';
import ElementTempApp from './ElementTempApp';
import ElementStatus from './ElementStatus';
import Elements from './Elements';

class ElementsContainer extends React.Component {
  handleRemoveLocation = e => {
    e.preventDefault();

    this.props.showRemovePopup(e.target.attributes['data-id'].value);
  }

  render() {
    console.log(this.props);  
    return (
      <Elements>
        {(this.props.elements.length !== 0) ?
          this.props.elements.map(element => (
            <Element key={element.timezone}>
              <ElementButton data-id={element.id} onClick={this.handleRemoveLocation} />
              <ElementTimezone>{element.timezone.replace('_', ' ')}</ElementTimezone>
              <ElementCoords>{`${element.latitude},${element.longitude}`}</ElementCoords>
              <ElementData>
                <ElementTemp>
                  <ElementTempStandard>{element.temperature}</ElementTempStandard>
                  <ElementTempApp>{element.appTemperature}</ElementTempApp>
                </ElementTemp>
                <Skycons color="#252831" icon={element.icon.toUpperCase().replace(/-/g, '_')} />
              </ElementData>
              <ElementStatus>{element.status}</ElementStatus>
            </Element>
          ))
          : ``
        }
      </Elements>
    )
  }
}

const mapStateToProps = state => ({
  elements: state.elements
})

export default connect(mapStateToProps, null)(ElementsContainer);
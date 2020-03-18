import React from 'react';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const server = 'https://api.darksky.net/forecast/';
const key = '60fdaef213cea5b3365a03a6d95aec60';
let latitude = '42.3601';
let longitude = '-71.0589';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }
  
  componentDidMount() {
    fetch(`${proxy}${server}${key}/${longitude},${latitude}`)
    .then(response => {
      return response.json()
    })
    .then(data => {      
      console.log(data);
      this.setState({
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone
      })
    })
  }

  render() {
    console.log(this.state);
    return (
      <div></div>
    )
  }
}

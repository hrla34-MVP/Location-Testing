import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fenceDefiner from './FenceDefiner/fenceDefiner';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

let areas = [
  {
    identifier: 'Hack Reactor',
    longitude: -118.390868,
    latitude: 33.976097,
    radius: 100
  },
  {

  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPos: "NO-WHERE"
    }
  }

  componentDidMount() {
    fenceDefiner([{
      identifier: 'Hack Reactor',
      longitude: -118.390868,
      latitude: 33.976097,
      radius: 100
    }]);

    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      alert('Permissions to access location was deined');
    }

    Location.getCurrentPositionAsync({})
      .then((val) => {
        let loc = JSON.stringify(val.coords);
        this.setState({
          currPos: loc
        });
      })
      .catch(err => console.error(err))
  } 
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.currPos}</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

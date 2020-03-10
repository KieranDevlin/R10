import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles';
const Map = () => {
  const latlng = {
    latitude: 49.26336,
    longitude: -123.13813,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
  return (
    <View style={styles.root}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={latlng}
        showsUserLocation={true}>
        <Marker coordinate={latlng} title={'R10'} description={'R10'} />
      </MapView>
    </View>
  );
};

Map.propTypes = {
  navigation: PropTypes.object,
};
export default Map;

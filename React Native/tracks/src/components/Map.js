import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);

  // let points = [];
  // for (let i = 0; i < 10; i++) {
  //   points.push({
  //     latitude: 37.33233 + i * 0.001,
  //     longitude: -122.03121 + i * 0.001
  //   });
  // }

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  // const initialLocation = {
  //   longitude: -64.17836516713734,
  //   latitude: -31.425312249201227
  // };

  // console.log(
  //   locations.map((loc) => ({
  //     lat: loc.coords.latitude,
  //     lng: loc.coords.longitude
  //   }))
  // );

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        // ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      {/* <Polyline coordinates={points} /> */}
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;

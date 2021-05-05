import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './style';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAP_BOX_TOKEN} from '../../../../env';
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {primaryColors} from '../../../config/colors';

const accessToken = MAP_BOX_TOKEN;
MapboxGL.setAccessToken(accessToken);
const directionsClient = MapboxDirectionsFactory({accessToken});

export default props => {
  const [route, setRoute] = useState(null);

  const startingCoordinates = [
    props.route.params.userCoordsLongitude,
    props.route.params.userCoordsLatitude,
  ];
  const destinationCoordinates = [
    props.route.params.longitude,
    props.route.params.latitude,
  ];
  const startDestinationPoints = [startingCoordinates, destinationCoordinates];

  useEffect(() => {
    fetchRoute();
  });

  const fetchRoute = async () => {
    const reqOptions = {
      waypoints: [
        {coordinates: startingCoordinates},
        {coordinates: destinationCoordinates},
      ],
      profile: 'driving-traffic',
      geometries: 'geojson',
    };
    const res = await directionsClient.getDirections(reqOptions).send();
    console.log(res.body.routes[0].geometry.coordinates);
    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setRoute(newRoute);
  };

  const renderAnnotations = () => {
    return startDestinationPoints.map((point, index) => (
      <MapboxGL.PointAnnotation
        key={`${index}-PointAnnotation`}
        id={`${index}-PointAnnotation`}
        coordinate={point}>
        {index === 1 ? (
          <View style={[styles.locationPointer]} />
        ) : (
          <View
            style={[
              styles.locationPointer,
              {backgroundColor: primaryColors.black},
            ]}
          />
        )}
      </MapboxGL.PointAnnotation>
    ));
  };

  const [coordinates] = useState([-73.99155, 40.73581]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={0}
            centerCoordinate={startingCoordinates}
            followUserLocation={true}
          />
          {renderAnnotations()}
          {route && (
            <MapboxGL.ShapeSource id="shapeSource" shape={route}>
              <MapboxGL.LineLayer
                id="lineLayer"
                style={{
                  lineWidth: 5,
                  lineJoin: 'bevel',
                  lineColor: primaryColors.red,
                }}
              />
            </MapboxGL.ShapeSource>
          )}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

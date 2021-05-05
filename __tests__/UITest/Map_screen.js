import React from 'react';
import {create} from 'react-test-renderer';
import MapScreen from '../../src/screens/map-search/map/map';

const navigation = {
  navigate: jest.fn(),
  params: Function.prototype,
  dispatch: Function.prototype,
  route: (params, defaultValue) => {
    return defaultValue;
  },
};

const mockedParams = {
  route: {
    params: {
      userCoordsLongitude: 0,
      userCoordsLatitude: 0,
      longitude: 0,
      latitude: 0,
    },
  },
  navigation: '',
};

const tree = create(<MapScreen {...mockedParams} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import {create} from 'react-test-renderer';
import UserInput from '../../src/screens/map-search/user-input/user_input';

const tree = create(<UserInput />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

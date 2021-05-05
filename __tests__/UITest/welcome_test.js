import React from 'react';
import {create} from 'react-test-renderer';
import Welcome from '../../src/screens/welcome/welcome';

const tree = create(<Welcome />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import {Root, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import EasyWayRootNavigation from './src/route/root';

export default () => (
  <StyleProvider style={getTheme(platform)}>
    <Root>
      <EasyWayRootNavigation />
    </Root>
  </StyleProvider>
);

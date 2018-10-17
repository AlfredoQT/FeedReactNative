import React from 'react';

import { Provider } from 'react-redux';

import * as firebase from './utils/firebase';
import configureStore from './redux/create';
import NavigationController from './NavigationController';

firebase.init();

export default function() {
  return (
    <Provider store={configureStore()}>
      <NavigationController />
    </Provider>
  )
}

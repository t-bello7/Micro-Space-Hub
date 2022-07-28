import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/Missions';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

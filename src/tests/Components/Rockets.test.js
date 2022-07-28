import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Rockets from '../../components/Rockets';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

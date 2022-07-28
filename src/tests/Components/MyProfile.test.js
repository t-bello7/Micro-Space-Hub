import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import MyProfile from '../../components/MyProfile';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import CheckoutForm from './pages/Checkout';
const inputs = 'Test Inputs';

it('should display Address Line 1 on the page', () => {
  const wrapper = shallow(<CheckoutForm />);
  expect(wrapper.text().includes('Address Line 1')).toBe(true);
});

it('should display Credit card number on the page', () => {
  const wrapper = shallow(<CheckoutForm />);
  expect(wrapper.text().includes('Credit card number')).toBe(true);
});

it('should display Security code on the page', () => {
  const wrapper = shallow(<CheckoutForm />);
  expect(wrapper.text().includes('Security code')).toBe(true);
});


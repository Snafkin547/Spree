import React from 'react';
import { shallow } from 'enzyme';
import CheckoutForm from './pages/Checkout';
const inputs = 'Test Inputs';
let wrapped = shallow(<CheckoutForm>{CheckoutForm}</CheckoutForm>);
describe('CheckoutForm', () => {
  it('validates checkout form on submit', () => {   
    const handleSubmit = jest.fn();
        const wrapper = mount(
            <CheckoutForm handleSubmit={handleSubmit}/>
        );
        const instance = wrapper.instance();
        const submitBtn = app.find('#submitBtn') //not sure what it's supposed to find
        submitBtn.simulate('click')
        expect(handleSubmit).toHaveBeenCalled();
});
})
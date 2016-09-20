import React from 'react';
import { mount } from 'enzyme';
import ListItemForm from '../../src/components/ListItemForm';


describe('ListItemForm component', () => {
  const spy = jest.fn();
  const wrapper = mount(
    <ListItemForm handleAddItem={spy} />
  );

  it('should have one input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should have one button', () => {
    expect(wrapper.find('.list-form__submit').length).toEqual(1);
  });

  it('should start with blank formValue state', () => {
    expect(wrapper.state().formValue).toEqual('');
  });

  it('should clear the formValue on click', () => {
    wrapper.setState({ formValue: 'item Z' });
    wrapper.find('.list-form__submit').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('formValue')).toEqual('');
  });
});

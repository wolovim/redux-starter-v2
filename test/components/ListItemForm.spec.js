import React from 'react';
import { mount } from 'enzyme';
import ListItemForm from '../../src/components/ListItemForm';
import expect, { createSpy } from 'expect';

describe('ListItemForm component', () => {
  const spy = createSpy();
  const wrapper = mount(
    <ListItemForm handleAddItem={spy} />
  );

  it('should have one input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should start with blank formValue state', () => {
    expect(wrapper.state().formValue).toEqual('');
  });

  it('should clear the formValue on click', () => {
    wrapper.setState({ formValue: 'item Z' });
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('formValue')).toEqual('');
  });
});

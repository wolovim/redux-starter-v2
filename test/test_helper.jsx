import React from 'react';
import jsdom from 'jsdom';
import _$ from 'jquery';
import { mount } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Immutable from 'immutable';
import reducers from 'reducers/index.js';

const initialState = Immutable.Map();

export function mockStorage() {
  const storage = {};
  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return storage[key];
    },
    removeItem(key) {
      delete storage[key];
    },
    get() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}

/**
 * Render a Component
 * @param {Object} ComponentClass - The Component you want to render
 * @param {Object} props - component level props
 * @param {Object} state - application state
 * @return {jQuery DOM} - creates Component via HTML
 */
export function renderComponent(ComponentClass, props = {}, state = initialState) {
  const componentInstance = mount(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass { ...props } />
    </Provider>
  );

  return componentInstance;
}

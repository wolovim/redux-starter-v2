import LoginPageForm from 'Login/index.jsx';
import { renderComponent }from '../../test_helper';

describe('LoginPage', () => {
    let component;
    let spy;

    beforeEach(() => {
      spy = jest.fn();
      component = renderComponent(LoginPageForm, { loginUser: spy });
    });

    it('renders parent div', () => {
      expect(component.find('.login').length).toBe(1);
    });

    it('contains 3 inputs', () => {
      expect(component.find('input').length).toBe(2);
    });

    it('calls loginUser', () => {
      const form = component.find('form');
      const email = component.find('input').first();
      const password = component.find('input').last();

      email.simulate('change', { target: { value: 'f@f.com' }});
      password.simulate('change', { target: { value: 'password' }});
      form.simulate('submit');
      console.log(spy.mock);
      expect(spy.calledOnce).to.equal(true);
    });
});

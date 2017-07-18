/**
 * Test the ForexPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ReposList from 'components/ReposList';
import { ForexPage, mapDispatchToProps } from '../index';
import { changeBase } from '../actions';
import { loadRates } from '../../App/actions';

describe('<ForexPage />', () => {
  it('should render the rates list', () => {
    const renderedComponent = shallow(
      <ForexPage loading error={false} rates={[]} />
    );
    expect(renderedComponent.contains(<ReposList loading error={false} rates={[]} />)).toEqual(true);
  });

  it('should render fetch the rates on mount if a base exists', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <ForexPage
          base="Not Empty"
          onChangeBase={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeBase', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeBase).toBeDefined();
      });

      it('should dispatch changeBase when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const base = 'mxstbr';
        result.onChangeBase({ target: { value: base } });
        expect(dispatch).toHaveBeenCalledWith(changeBase(base));
      });
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch loadRates when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSubmitForm();
      expect(dispatch).toHaveBeenCalledWith(loadRates());
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const evt = { preventDefault };
      result.onSubmitForm(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});

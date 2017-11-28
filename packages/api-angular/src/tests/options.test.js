import angular from 'angular';
import 'angular-mocks';
import AvApiModule from '../';

describe('AvApiOptionsProvider', () => {
  let provider;

  beforeEach(() => {
    angular.mock.module(AvApiModule, AvApiOptionsProvider => {
      provider = AvApiOptionsProvider;
    });
  });

  test('AvApiOptionsProvider should be defined', () => {
    angular.mock.inject(() => {
      expect(provider).toBeDefined();
    });
  });

  test('AvApiOptionsProvider getOptions should return a copy of defaults', () => {
    angular.mock.inject(() => {
      const gotDefaults = provider.getOptions();
      expect(provider.defaultOptions).not.toBe(gotDefaults);
      expect(provider.defaultOptions).toEqual(gotDefaults);
    });
  });

  test('AvApiOptionsProvider setOptions should merge into defaults', () => {
    angular.mock.inject(() => {
      const testDefaults1 = {
        testVal: 'test',
      };
      const testDefaults2 = {
        testVal2: 'test2',
      };
      provider.defaultOptions = {}; // remove header Fn to simplify test
      expect(provider.defaultOptions).toEqual({});
      provider.setOptions(testDefaults1);
      expect(provider.defaultOptions).toEqual(testDefaults1);
      const expectedResult = Object.assign({}, testDefaults1, testDefaults2);
      provider.setOptions(testDefaults2);
      expect(provider.defaultOptions).toEqual(expectedResult);
    });
  });

  test('AvApiOptionsProvider $get should be defaults', () => {
    angular.mock.inject(() => {
      expect(provider.$get()).toEqual(provider.defaultOptions);
    });
  });
});

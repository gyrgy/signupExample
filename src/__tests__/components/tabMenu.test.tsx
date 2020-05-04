import React from 'react';
import {
  render,
  RenderResult,
  cleanup,
  fireEvent
} from '@testing-library/react';
import { SignUpTabMenu } from 'src/components';
import {
  tabMenuTestID,
  tabMenuUserTabTestID,
  tabMenuPrivacyTabTestID,
  tabMenuDoneTabTestID
} from 'src/constants/testIDs';

describe('test tab menu component', () => {
  let selectedIndex = 0;
  const spyOnChangeHandler = jest.fn();
  let menu: RenderResult;

  beforeEach(() => {
    menu = render(
      <SignUpTabMenu
        selectedIndex={selectedIndex}
        onChange={spyOnChangeHandler}
      />
    );
  });

  afterEach(cleanup);

  it('test menu rendered', () => {
    const { getByTestId } = menu;
    const tabMenu = getByTestId(tabMenuTestID);
    const userTab = getByTestId(tabMenuUserTabTestID);
    const privacyTab = getByTestId(tabMenuPrivacyTabTestID);
    const doneTab = getByTestId(tabMenuDoneTabTestID);

    expect(tabMenu).toBeInTheDocument();
    expect(userTab).toBeInTheDocument();
    expect(privacyTab).toBeInTheDocument();
    expect(doneTab).toBeInTheDocument();
  });

  it('test privacy and done tabs to be disabled', () => {
    const { getByTestId } = menu;
    const userTab = getByTestId(tabMenuUserTabTestID);
    const privacyTab = getByTestId(tabMenuPrivacyTabTestID);
    const doneTab = getByTestId(tabMenuDoneTabTestID);

    expect(userTab).toHaveProperty('disabled', false);
    expect(privacyTab).toHaveProperty('disabled', true);
    expect(doneTab).toHaveProperty('disabled', true);
  });

  it('test user and done tabs to be disabled', () => {
    selectedIndex = 1;
    const { rerender, getByTestId } = menu;
    rerender(<SignUpTabMenu
      selectedIndex={selectedIndex}
      onChange={spyOnChangeHandler}
    />);

    const userTab = getByTestId(tabMenuUserTabTestID);
    const privacyTab = getByTestId(tabMenuPrivacyTabTestID);
    const doneTab = getByTestId(tabMenuDoneTabTestID);

    expect(userTab).toHaveProperty('disabled', true);
    expect(privacyTab).toHaveProperty('disabled', false);
    expect(doneTab).toHaveProperty('disabled', true);
  });

  it('test user and privacy tabs to be disabled', () => {
    selectedIndex = 2;
    const { rerender, getByTestId } = menu;
    rerender(<SignUpTabMenu
      selectedIndex={selectedIndex}
      onChange={spyOnChangeHandler}
    />);

    const userTab = getByTestId(tabMenuUserTabTestID);
    const privacyTab = getByTestId(tabMenuPrivacyTabTestID);
    const doneTab = getByTestId(tabMenuDoneTabTestID);

    expect(userTab).toHaveProperty('disabled', true);
    expect(privacyTab).toHaveProperty('disabled', true);
    expect(doneTab).toHaveProperty('disabled', false);
  });

  it('test onChange callback to be called', () => {
    selectedIndex = 0;
    const { rerender, getByTestId } = menu;
    rerender(<SignUpTabMenu
      selectedIndex={selectedIndex}
      onChange={spyOnChangeHandler}
    />);

    const userTab = getByTestId(tabMenuUserTabTestID);

    fireEvent.click(userTab);

    expect(userTab).toHaveProperty('disabled', false);
    expect(spyOnChangeHandler).toHaveBeenCalledTimes(1);
  });
});
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TestDemo from './TestDemo';

describe('dialog', () => {
  it('should match snapshot', () => {
    const {asFragment} = render(<TestDemo/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should dialog pop out after user click the button', async () => {
    const {queryByTestId} = render(<TestDemo/>);
    expect(queryByTestId("dim-back")).toBeNull();
    let buttonEl = await screen.findByRole("button");
    fireEvent.click(buttonEl);
    expect(queryByTestId("dim-back")).toBeTruthy();
  });

  it('should dialog disappear after user click the back ground', async () => {
    const {queryByTestId} = render(<TestDemo/>);
    let buttonEl = await screen.findByRole("button");
    fireEvent.click(buttonEl);
    let dimBack = screen.getByTestId("dim-back");
    fireEvent.click(dimBack);
    expect(queryByTestId("dim-back")).toBeNull();
  });

  it('should fire the onClose function when the window is closed from the action button', async () => {
    const mockCallback = jest.fn();
    const {queryByTestId} = render(<TestDemo onClose={mockCallback}/>);
    let buttonEl = await screen.findByRole("button");
    fireEvent.click(buttonEl);
    let cancelButton = screen.getByTestId("cancel-button");
    fireEvent.click(cancelButton);
    expect(mockCallback).toBeCalledTimes(1);
  });

  it('should the window stop rolling when the dialog is pop out', async () => {
    const {queryByTestId} = render(<TestDemo/>);
    let buttonEl = await screen.findByRole("button");
    fireEvent.click(buttonEl);
    // let body = await screen.findBy("body");
    expect(document.body.style).toHaveProperty("overflow", "hidden");
  });
}

)
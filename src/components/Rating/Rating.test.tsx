import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rating, { IRatingProps } from './Rating';

describe('Rating Component', () => {
  it('should render default Rating component', () => {
    const { asFragment } = render(<Rating />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Rating component with different values based on props', () => {
    const ratingProps: IRatingProps = {
      defaultRating: 1,
      size: 'large',
    };
    const component = render(<Rating {... ratingProps} />);
    const rating = screen.queryByText(
      'Normal large'
    ) as HTMLElement;
    const element = screen.getByTestId('star-container')
    expect(element).toBeInTheDocument();
    const starInput = screen.getAllByRole('radio');
    expect(+starInput[0].value).toBe(1);
  });

  it('should render Rating component disabled', () => {
    const ratingProps: IRatingProps = {
      disabled: true,
      totalStars: 5,
    };
    const  container = render(<Rating />);
    render(<Rating {...ratingProps} />);
    const rating = screen.queryByText('Disabled') as HTMLElement;
    expect(rating).toBeInTheDocument();
    const starInput = screen.getAllByRole('radio');
    fireEvent.click(starInput[3]);
    expect(+starInput[1].value).toBe(2);
  });

  it('should render the prop amount of stars', async () => {
    const ratingProps: IRatingProps = {
      totalStars: 8,
    };
    render(<Rating {...ratingProps} />);
    // const totalStars = await screen.findAllByText('Normal medium');
    const element = await screen.getByTestId('star-container');
    expect(element.querySelectorAll('label')).toHaveLength(8);
  });

});

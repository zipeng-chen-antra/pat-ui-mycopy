import * as React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const DefaultRating = () => (
  <>
    <label>
      <Rating size="small" />
    </label>
    <label>
      <Rating />
    </label>
    <label>
      <Rating size="large" />
    </label>
  </>
);

export const DisabledRating = () => (
  <>
    <Rating disabled={true} defaultRating={4} />
  </>
);

export const NoRating = () => (
  <>
    <label>
      <Rating defaultRating={0} />
    </label>
    <label>
      <Rating disabled={true} defaultRating={0} />
    </label>
  </>
);

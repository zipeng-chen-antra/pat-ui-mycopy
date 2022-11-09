import React, {
  FC,
  useState,
} from 'react';
import { FiStar } from 'react-icons/fi';

export type RatingSize = 'small' | 'medium' | 'large';
export type RatingVisual = 'filled' | 'empty';
export interface IRatingProps {
  /** set customized style */
  className?: string;
  /** set disabledness */
  disabled?: boolean;
  /** set label */
  label?: string;
  /** set default stars highlighted */
  defaultRating?: number;
  /** set total amount of stars */
  totalStars?: number;
  /** set size of stars */
  size?: RatingSize;
  /** set star fill empty or full */
  starFill?: RatingVisual;
  // rating?: number;
}

const Rating: FC<IRatingProps> = ({
  totalStars = 5,
  disabled = false,
  size = 'medium',
  defaultRating = 2,
  label = 'Example label',
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(0);
  return (
    <>
      <label>{!label ? size : label}</label>
      <span className="star-container" data-testid="star-container">
        {[...Array(totalStars)].map((star, i) => {
          const inputValue = i + 1;
          return (
            <label className="star-label" key={i}>
              <input
                data-testid={`star-input-${inputValue}`}
                type="radio"
                className="star-input"
                name="rating"
                value={inputValue}
                onClick={() => !disabled && setRating(inputValue)}
              ></input>
              <FiStar
                className={`star-${size} ${disabled && `star-disabled`}`}
                color={inputValue <= (hover || rating) ? 'yellow' : 'grey'}
                size={size}
                onMouseEnter={() => !disabled && setHover(inputValue)}
                onMouseLeave={() => !disabled && setHover(0)}
              ></FiStar>
            </label>
          );
        })}
      </span>
    </>
  );
};

export default Rating;

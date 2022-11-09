import React, {
  FC,
  useState,
} from 'react';
import { FiStar } from 'react-icons/fi';

export type RatingSize = 'small' | 'medium' | 'large';
export type RatingVisual = 'filled' | 'half-filled' | 'empty';
export interface IRatingProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  defaultRating?: number;
  totalStars?: number;
  size?: RatingSize;
  starFill?: RatingVisual;
  rating?: number;
}

const Rating: FC<IRatingProps> = ({
  totalStars = 5,
  disabled = false,
  size = 'medium',
  defaultRating = 2,
  label=size
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(0);
  return (
    <>
      <label>{disabled ? 'Disabled' : 'Normal ' + label}</label>
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
                onClick={() => setRating(inputValue)}
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

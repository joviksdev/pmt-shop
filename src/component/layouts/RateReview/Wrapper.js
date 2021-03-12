import React, { useState } from 'react';
import Header from './Header';
import Item from './Item';
import RateItem from './RateItem';
import Review from './Review';

const Wrapper = () => {
  const [reviewDetails, setReviewDetails] = useState({
    rating: 0,
    name: '',
    message: ''
  });

  const { rating } = reviewDetails;

  const handleRating = id => {
    if (rating === id) {
      setReviewDetails({ ...reviewDetails, rating: rating - 1 });
    } else {
      setReviewDetails({ ...reviewDetails, rating: id });
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    console.log('submit');
  };

  return (
    <div>
      <Header />
      <Item />
      <RateItem rating={rating} handleRating={handleRating} />
      <Review
        reviewDetails={reviewDetails}
        setReviewDetails={setReviewDetails}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
};

export default Wrapper;

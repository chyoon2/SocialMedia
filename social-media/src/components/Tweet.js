import React from 'react';
import PropTypes from 'prop-types';

function Tweet(props) {
  return (
    <React.Fragment>
      <h3><strong>{props.title}</strong></h3>
      <p>{props.body}</p>
    </React.Fragment>
  );
}

Tweet.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default Tweet;
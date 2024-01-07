import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];

  return (
    <div className="rate-contenair">
      {notes.map((note) => (
        <FontAwesomeIcon
          icon={faStar}
          className={score >= note ? 'star_red' : 'star'}
          key={note.toString()}
        />
      ))}
    </div>
  );
}

export default Rate;
